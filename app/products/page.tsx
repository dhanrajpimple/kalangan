'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Plus, Minus, ShoppingBag, X } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { supabaseService } from '@/services/supabaseService';

interface Category {
    id: string;
    category_name: string;
}

interface Product {
    id: string;
    name: string;
    image_url: string;
    description: string;
    price: number;
    in_stock: boolean;
    category_id: string;
    best_seller: boolean;
    show_description?: boolean;
    show_price?: boolean;
}

export default function Products() {
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | 'Best Seller'>('Best Seller');
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState<Record<string, { product: Product, qty: number }>>({});
    const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', address: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setShowWhatsApp(true);
        loadInitialData();
    }, []);

    const loadInitialData = async () => {
        try {
            setLoading(true);
            const [cats, bestsellers] = await Promise.all([
                supabaseService.getCategories(),
                supabaseService.getProductsByCategory(null, true)
            ]);
            setCategories(cats);
            setProducts(bestsellers);
        } catch (error) {
            console.error('Failed to load data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = async (catId: string | 'Best Seller') => {
        setSelectedCategory(catId);
        setLoading(true);
        try {
            const data = await supabaseService.getProductsByCategory(
                catId === 'Best Seller' ? null : catId,
                catId === 'Best Seller'
            );
            setProducts(data);
        } catch (error) {
            console.error('Failed to load products:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleProduct = (product: Product) => {
        setSelectedItems(prev => {
            const newItems = { ...prev };
            if (newItems[product.id]) {
                delete newItems[product.id];
            } else {
                newItems[product.id] = { product, qty: 1 };
            }
            return newItems;
        });
    };

    const updateQty = (id: string, delta: number) => {
        setSelectedItems(prev => {
            const item = prev[id];
            if (!item) return prev;
            const newQty = Math.max(0, item.qty + delta);
            if (newQty === 0) {
                const newItems = { ...prev };
                delete newItems[id];
                return newItems;
            }
            return {
                ...prev,
                [id]: { ...item, qty: newQty }
            };
        });
    };

    const getSelectedList = () => Object.values(selectedItems).map(item => ({ ...item.product, quantity: item.qty }));

    const handleSubmit = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.address.trim()) newErrors.address = 'Required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const items = getSelectedList().map(p => `• ${p.name} x${p.quantity}`).join('\n');
        const msg = `Hi! I'd like to order:\n\n${items}\n\nName: ${formData.name}\nAddress: ${formData.address}`;
        window.open(`https://wa.me/919833291030?text=${encodeURIComponent(msg)}`, '_blank');
        setShowForm(false);
        setSelectedItems({});
        setFormData({ name: '', address: '' });
    };

    const handleImageMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
    };

    const handleImageMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        setImagePosition({ x: newX, y: newY });
    };

    const handleImageMouseUp = () => {
        setIsDragging(false);
    };

    const resetImagePosition = () => {
        setImagePosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        resetImagePosition();
    }, [selectedProductDetail]);

    const totalSelectedCount = Object.keys(selectedItems).length;

    // Structured Data for SEO
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": selectedCategory === 'Best Seller' ? "Best Selling Handmade Gifts" : `${selectedCategory} Collection`,
        "description": "Discover our exquisite collection of handmade wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, and keychains. Premium handcrafted gifts for all occasions.",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://kalanganhandmade.in/products`,
            "name": product.name,
            "image": product.image_url
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kalanganhandmade.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://kalanganhandmade.in/products"
            }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navbar />

            {/* WhatsApp Floating */}
            {showWhatsApp && (
                <a
                    href="https://wa.me/919833291030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all font-inter"
                    style={{ backgroundColor: '#25D366' }}
                >
                    <MessageCircle size={26} color="#fff" />
                </a>
            )}

            {/* Main */}
            <section className="flex-1 px-4 sm:px-6 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3" style={{ color: '#8B0000' }}>
                            Handmade Collection
                        </h1>
                        <p className="text-gray-600">Wedding Frames, Nameplates, Birthday Gifts, Customized Frames, Fridge Magnets & Keychains</p>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10 animate-fade-in-up delay-100">
                        <button
                            onClick={() => handleCategoryChange('Best Seller')}
                            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                            style={{
                                backgroundColor: selectedCategory === 'Best Seller' ? '#8B0000' : 'rgba(255,255,255,0.8)',
                                color: selectedCategory === 'Best Seller' ? '#fff' : '#8B0000',
                                boxShadow: selectedCategory === 'Best Seller' ? '0 4px 15px rgba(139,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                            }}
                        >
                            Best Seller
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: selectedCategory === cat.id ? '#8B0000' : 'rgba(255,255,255,0.8)',
                                    color: selectedCategory === cat.id ? '#fff' : '#8B0000',
                                    boxShadow: selectedCategory === cat.id ? '0 4px 15px rgba(139,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                                }}
                            >
                                {cat.category_name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                            {products.length === 0 ? (
                                <div className="col-span-full text-center py-10 text-gray-500">
                                    No products found in this category.
                                </div>
                            ) : (
                                products.map((product, idx) => (
                                    <div
                                        key={product.id}
                                        className={`glass-card rounded-2xl overflow-hidden animate-scale-in transition-all ${product.in_stock ? 'hover-lift cursor-pointer group' : 'opacity-80'}`}
                                        style={{ animationDelay: `${idx * 0.05}s` }}
                                        onClick={() => product.in_stock && setSelectedProductDetail(product)}
                                    >
                                        <div className="relative aspect-square overflow-hidden">
                                            <img
                                                src={product.image_url || '/jewelry.webp'}
                                                alt={product.name}
                                                className={`w-full h-full object-cover transition-transform duration-500 ${product.in_stock ? 'group-hover:scale-110' : 'grayscale'}`}
                                            />

                                            {/* Out of Stock Badge */}
                                            {!product.in_stock && (
                                                <div className="absolute top-3 right-3 z-10">
                                                    <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg border border-red-400/50">
                                                        Sold Out
                                                    </span>
                                                </div>
                                            )}

                                            {product.in_stock && (
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                    <button className="bg-white/90 backdrop-blur-sm text-[#8B0000] px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                                        View Details
                                                    </button>
                                                </div>
                                            )}

                                            {selectedItems[product.id] && product.in_stock ? (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                                                    <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-xl">
                                                        <button onClick={(e) => { e.stopPropagation(); updateQty(product.id, -1); }} className="text-[#8B0000] hover:scale-110 transition-transform">
                                                            <Minus size={18} />
                                                        </button>
                                                        <span className="font-bold min-w-[24px] text-center text-gray-800">{selectedItems[product.id].qty}</span>
                                                        <button onClick={(e) => { e.stopPropagation(); updateQty(product.id, 1); }} className="text-[#8B0000] hover:scale-110 transition-transform">
                                                            <Plus size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-sm sm:text-base mb-3 leading-tight" style={{ color: product.in_stock ? '#2d2d2d' : '#9ca3af' }}>
                                                {product.name}
                                            </h3>
                                            {!product.in_stock ? (
                                                <button
                                                    disabled
                                                    className="w-full py-2.5 rounded-xl text-sm font-bold bg-gray-100 text-gray-400 border border-gray-200"
                                                >
                                                    Out of Stock
                                                </button>
                                            ) : selectedItems[product.id] ? (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); toggleProduct(product); }}
                                                    className="w-full py-2.5 rounded-xl text-sm font-medium transition-all"
                                                    style={{ backgroundColor: 'rgba(139,0,0,0.1)', color: '#8B0000' }}
                                                >
                                                    Selected ✓
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); toggleProduct(product); }}
                                                    className="w-full py-2.5 rounded-xl text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)',
                                                        boxShadow: '0 4px 15px rgba(139,0,0,0.2)'
                                                    }}
                                                >
                                                    Select
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Floating Cart Button */}
            {totalSelectedCount > 0 && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 animate-fade-in-up">
                    <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold shadow-2xl transition-all hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)',
                            boxShadow: '0 8px 25px rgba(139,0,0,0.3)'
                        }}
                    >
                        <ShoppingBag size={20} />
                        Order Now ({totalSelectedCount})
                    </button>
                </div>
            )}

            {/* Order Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowForm(false)}>
                    <div className="glass-card rounded-3xl max-w-md w-full p-6 sm:p-8 animate-scale-in" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#8B0000' }}>Complete Order</h2>
                            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="space-y-2 mb-6 max-h-32 overflow-y-auto font-inter">
                            {getSelectedList().map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-700">{item.name}</span>
                                    <span className="font-medium text-[#8B0000]">×{item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="space-y-4 mb-6 font-inter">
                            <div>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition"
                                    style={{ borderColor: errors.name ? '#ef4444' : 'rgba(212,175,55,0.3)', backgroundColor: 'white' }}
                                />
                                {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="Delivery Address"
                                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition"
                                    style={{ borderColor: errors.address ? '#ef4444' : 'rgba(212,175,55,0.3)', backgroundColor: 'white' }}
                                />
                                {errors.address && <p className="text-xs text-red-500 mt-1 ml-1">{errors.address}</p>}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
                        >
                            <MessageCircle size={20} />
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            )}

            {/* Product Detail Modal */}
            {selectedProductDetail && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={() => setSelectedProductDetail(null)}>
                    <div
                        className="glass-card rounded-[2rem] max-w-2xl w-full overflow-hidden animate-scale-in"
                        onClick={e => e.stopPropagation()}
                        style={{ maxHeight: '90vh' }}
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Part */}
                            <div 
                                className="md:w-1/2 aspect-square md:aspect-auto relative bg-gray-50 overflow-hidden cursor-move"
                                onMouseDown={handleImageMouseDown}
                                onMouseMove={handleImageMouseMove}
                                onMouseUp={handleImageMouseUp}
                                onMouseLeave={handleImageMouseUp}
                            >
                                <img
                                    src={selectedProductDetail.image_url || '/jewelry.webp'}
                                    alt={selectedProductDetail.name}
                                    className="w-full h-full object-contain transition-none"
                                    style={{
                                        transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                                        cursor: isDragging ? 'grabbing' : 'grab'
                                    }}
                                    draggable={false}
                                />
                                <button
                                    onClick={() => setSelectedProductDetail(null)}
                                    className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 shadow-md hover:scale-110 transition-all md:hidden"
                                >
                                    <X size={20} />
                                </button>
                                {/* Reset position button */}
                                {(imagePosition.x !== 0 || imagePosition.y !== 0) && (
                                    <button
                                        onClick={resetImagePosition}
                                        className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 shadow-md hover:scale-110 transition-all"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                            <path d="M3 3v5h5"/>
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Info Part */}
                            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: '#8B0000' }}>
                                            {selectedProductDetail.name}
                                        </h2>
                                        <button
                                            onClick={() => setSelectedProductDetail(null)}
                                            className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            <X size={24} className="text-gray-400" />
                                        </button>
                                    </div>

                                    {(selectedProductDetail.show_price !== false && selectedProductDetail.price > 0) && (
                                        <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>
                                            ₹{selectedProductDetail.price.toLocaleString()}
                                        </p>
                                    )}

                                    <div className="w-12 h-1 bg-[#8B0000] rounded-full" />

                                    {selectedProductDetail.show_description !== false && selectedProductDetail.description && (
                                        <div className="space-y-2">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Description</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                                {selectedProductDetail.description}
                                            </p>
                                        </div>
                                    )}

                                    <div className="pt-4 flex items-center gap-3 text-sm text-gray-500">
                                        <div className={`w-3 h-3 rounded-full ${selectedProductDetail.in_stock ? 'bg-green-500' : 'bg-red-500'}`} />
                                        {selectedProductDetail.in_stock ? 'In Stock' : 'Out of Stock'}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    {selectedItems[selectedProductDetail.id] ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                                                <span className="font-bold text-gray-800">Quantity</span>
                                                <div className="flex items-center gap-4 bg-white rounded-full px-4 py-2 shadow-sm">
                                                    <button onClick={() => updateQty(selectedProductDetail.id, -1)} className="text-[#8B0000] hover:scale-125 transition-transform">
                                                        <Minus size={20} />
                                                    </button>
                                                    <span className="font-black text-lg min-w-[24px] text-center">{selectedItems[selectedProductDetail.id].qty}</span>
                                                    <button onClick={() => updateQty(selectedProductDetail.id, 1)} className="text-[#8B0000] hover:scale-125 transition-transform">
                                                        <Plus size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    toggleProduct(selectedProductDetail);
                                                    setSelectedProductDetail(null);
                                                }}
                                                className="w-full py-4 rounded-2xl font-bold bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all"
                                            >
                                                Remove from Order
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                toggleProduct(selectedProductDetail);
                                                setSelectedProductDetail(null);
                                            }}
                                            disabled={!selectedProductDetail.in_stock}
                                            className="w-full py-4 rounded-2xl font-bold text-white shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
                                            style={{
                                                background: 'linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)',
                                                boxShadow: '0 10px 25px rgba(139,0,0,0.2)'
                                            }}
                                        >
                                            {selectedProductDetail.in_stock ? 'Add to Order' : 'Sold Out'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
