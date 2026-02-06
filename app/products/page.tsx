'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Plus, Minus, ChevronDown, ShoppingBag, X } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const PRODUCTS = [
    { id: 1, name: 'Wooden Plaque', image: '/jewelry.webp', category: 'Wood' },
    { id: 2, name: 'Ceramic Plate', image: '/jewelry.webp', category: 'Ceramic' },
    { id: 3, name: 'Metal Art', image: '/jewelry.webp', category: 'Metal' },
    { id: 4, name: 'Glass Sign', image: '/jewelry.webp', category: 'Glass' },
    { id: 5, name: 'Acrylic Decor', image: '/jewelry.webp', category: 'Acrylic' },
    { id: 6, name: 'Stone Art', image: '/jewelry.webp', category: 'Stone' },
    { id: 7, name: 'Brass Hanging', image: '/jewelry.webp', category: 'Brass' },
    { id: 8, name: 'Custom Frame', image: '/jewelry.webp', category: 'Frame' },
];

export default function Products() {
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProducts, setSelectedProducts] = useState<Record<number, number>>({});
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', address: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        setShowWhatsApp(true);
    }, []);

    const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
    const filteredProducts = selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);

    const toggleProduct = (id: number) => {
        setSelectedProducts(prev => ({
            ...prev,
            [id]: prev[id] ? 0 : 1
        }));
    };

    const updateQty = (id: number, delta: number) => {
        setSelectedProducts(prev => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + delta)
        }));
    };

    const getSelected = () => Object.entries(selectedProducts)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ ...PRODUCTS.find(p => p.id === parseInt(id))!, quantity: qty }));

    const handleSubmit = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.address.trim()) newErrors.address = 'Required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const items = getSelected().map(p => `• ${p.name} x${p.quantity}`).join('\n');
        const msg = `Hi! I'd like to order:\n\n${items}\n\nName: ${formData.name}\nAddress: ${formData.address}`;
        window.open(`https://wa.me/919146890521?text=${encodeURIComponent(msg)}`, '_blank');
        setShowForm(false);
        setSelectedProducts({});
        setFormData({ name: '', address: '' });
    };

    const selectedCount = Object.values(selectedProducts).filter(q => q > 0).length;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* WhatsApp Floating */}
            {showWhatsApp && (
                <a
                    href="https://wa.me/919146890521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
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
                            Our Collection
                        </h1>
                        <p className="text-gray-600">Handcrafted pieces for every occasion</p>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10 animate-fade-in-up delay-100">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: selectedCategory === cat ? '#8B0000' : 'rgba(255,255,255,0.8)',
                                    color: selectedCategory === cat ? '#fff' : '#8B0000',
                                    boxShadow: selectedCategory === cat ? '0 4px 15px rgba(139,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                        {filteredProducts.map((product, idx) => (
                            <div
                                key={product.id}
                                className="glass-card hover-lift rounded-2xl overflow-hidden animate-scale-in"
                                style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                                <div className="relative aspect-square">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {selectedProducts[product.id] ? (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                                                <button onClick={() => updateQty(product.id, -1)} className="text-[#8B0000]">
                                                    <Minus size={18} />
                                                </button>
                                                <span className="font-bold min-w-[20px] text-center">{selectedProducts[product.id]}</span>
                                                <button onClick={() => updateQty(product.id, 1)} className="text-[#8B0000]">
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-sm sm:text-base mb-3" style={{ color: '#2d2d2d' }}>
                                        {product.name}
                                    </h3>
                                    {selectedProducts[product.id] ? (
                                        <button
                                            onClick={() => toggleProduct(product.id)}
                                            className="w-full py-2.5 rounded-xl text-sm font-medium transition-all"
                                            style={{ backgroundColor: 'rgba(139,0,0,0.1)', color: '#8B0000' }}
                                        >
                                            Selected ✓
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => toggleProduct(product.id)}
                                            className="w-full py-2.5 rounded-xl text-sm font-medium text-white btn-primary"
                                        >
                                            Select
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Floating Cart Button */}
            {selectedCount > 0 && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 animate-fade-in-up">
                    <button
                        onClick={() => setShowForm(true)}
                        className="btn-primary flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold shadow-2xl"
                    >
                        <ShoppingBag size={20} />
                        Order Now ({selectedCount})
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
                        <div className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                            {getSelected().map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-700">{item.name}</span>
                                    <span className="font-medium">×{item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition"
                                    style={{ borderColor: errors.name ? '#ef4444' : 'rgba(212,175,55,0.3)', backgroundColor: 'white' }}
                                />
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
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
                        >
                            <MessageCircle size={20} />
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
