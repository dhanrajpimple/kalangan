import React from 'react';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllProducts, getProductById } from '@/services/supabaseServer';
import type { Product } from '@/services/supabaseServer';
import { generateSlug, parseSlugId } from '@/lib/slugUtils';

// Static fallback products for generateStaticParams
const staticProducts: Product[] = [
    { id: 'static-pop-up-frame-1', name: 'Customized Pop-Up Frame', description: 'Size - 8 by 8 inch\r\nCustomization Available', show_description: true, image_url: '/1.webp', best_seller: true, price: 550, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:00:00+00:00' },
    { id: 'static-pop-up-frame-3', name: 'Customized Pop-Up Frame', description: 'Size - 5 by 7 inch\r\nCustomization Available', show_description: true, image_url: '/3.webp', best_seller: true, price: 450, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:01:00+00:00' },
    { id: 'static-pop-up-frame-2', name: 'Customized Pop-Up Frame', description: 'Size - 8 by 8 inch\r\nCustomization Available', show_description: true, image_url: '/2.webp', best_seller: true, price: 550, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:02:00+00:00' },
    { id: 'static-pop-up-frame-4', name: 'Customized Pop-Up Frame', description: 'Size - 4 by 4 inch\r\nCustomization Available', show_description: true, image_url: '/4.webp', best_seller: true, price: 250, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:03:00+00:00' },
    { id: 'static-pop-up-frame-5', name: 'Customized Pop-Up Frame', description: 'Size - 8 by 8 inch\r\nCustomization Available', show_description: true, image_url: '/5.webp', best_seller: true, price: 550, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:04:00+00:00' },
    { id: 'static-pop-up-frame-6', name: 'Customized Pop-Up Frame', description: 'Size - 6 by 8 inch\r\nCustomization Available', show_description: true, image_url: '/6.webp', best_seller: true, price: 550, in_stock: true, category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3', created_at: '2026-05-23T10:05:00+00:00' },
    { id: 'static-wedding-frame-7', name: 'Combo Set of 3 Frames', description: 'Decorate your hall with our frames created to make every space perfect.\r\nSize - 12 by 18 inch\r\nCustomization Available', show_description: true, image_url: '/7.webp', best_seller: true, price: 2999, in_stock: true, category_id: '05338b97-f137-42d6-88d5-43e78214642d', created_at: '2026-05-23T10:06:00+00:00' },
    { id: 'static-batches-8', name: 'Customized Batches for Wedding', description: 'Customized batches for wedding', show_description: true, image_url: '/8.webp', best_seller: true, price: 80, in_stock: true, category_id: '56fe919b-a8a8-44f2-b694-bbf7d219c1c9', created_at: '2026-05-23T10:07:00+00:00' },
    { id: 'static-batches-9', name: 'Customized Batches for Special Occasion', description: 'Customized batches for special occasion', show_description: true, image_url: '/9.webp', best_seller: true, price: 80, in_stock: true, category_id: '56fe919b-a8a8-44f2-b694-bbf7d219c1c9', created_at: '2026-05-23T10:08:00+00:00' },
    { id: 'static-table-top-10', name: 'Vitthal Mauli', description: 'Size - 4 inch\r\nCustomization Available', show_description: true, image_url: '/10.webp', best_seller: true, price: 250, in_stock: true, category_id: '98c4217c-dba9-4737-81df-8af08d7b8871', created_at: '2026-05-23T10:09:00+00:00' },
    { id: 'static-table-top-11', name: 'Shree Swami Samarth', description: 'Size - 4 inch\r\nCustomization Available', show_description: true, image_url: '/11.webp', best_seller: true, price: 175, in_stock: true, category_id: '98c4217c-dba9-4737-81df-8af08d7b8871', created_at: '2026-05-23T10:10:00+00:00' },
];

function getAbsoluteImageUrl(imageUrl: string): string {
    if (!imageUrl) return 'https://kalanganhandmade.in/logo.png';
    return imageUrl.startsWith('http') ? imageUrl : `https://kalanganhandmade.in${imageUrl}`;
}

async function findProduct(slug: string): Promise<Product | null> {
    const productId = parseSlugId(slug);

    // Check static products first
    const staticProduct = staticProducts.find(p => p.id === productId);
    if (staticProduct) return staticProduct;

    // Then check Supabase
    return getProductById(productId);
}

// Generate static params for known products
export async function generateStaticParams() {
    const staticParams = staticProducts.map(p => ({
        slug: generateSlug(p.name, p.id),
    }));

    try {
        const apiProducts = await getAllProducts();
        const apiParams = apiProducts.map(p => ({
            slug: generateSlug(p.name, p.id),
        }));
        return [...staticParams, ...apiParams];
    } catch {
        return staticParams;
    }
}

// Dynamic metadata per product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await findProduct(slug);

    if (!product) {
        return {
            title: 'Product Not Found',
            robots: { index: false, follow: false },
        };
    }

    const productUrl = `https://kalanganhandmade.in/products/${generateSlug(product.name, product.id)}`;
    const description = product.description
        ? `${product.name} — ${product.description.replace(/\r\n/g, ', ')}. Handmade by Kalangan with Pan India delivery.`
        : `${product.name} — handmade customized gift by Kalangan. Order via WhatsApp with Pan India delivery.`;

    return {
        title: product.name,
        description: description.slice(0, 160),
        alternates: { canonical: `/products/${generateSlug(product.name, product.id)}` },
        openGraph: {
            title: `${product.name} | Kalangan Handmade`,
            description: description.slice(0, 200),
            url: productUrl,
            type: 'website',
            images: [{
                url: getAbsoluteImageUrl(product.image_url),
                width: 800,
                height: 1000,
                alt: `${product.name} - handmade by Kalangan`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: product.name,
            description: description.slice(0, 200),
            images: [getAbsoluteImageUrl(product.image_url)],
        },
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await findProduct(slug);

    if (!product) {
        notFound();
    }

    const canonicalSlug = generateSlug(product.name, product.id);
    if (slug !== canonicalSlug) {
        redirect(`/products/${canonicalSlug}`);
    }

    const productUrl = `https://kalanganhandmade.in/products/${canonicalSlug}`;
    const whatsappMsg = `Hi! I'm interested in:\n\n${product.name}\nPrice: ₹${product.price.toLocaleString('en-IN')}\nURL: ${productUrl}\n\nPlease share availability and delivery details.`;

    // Product JSON-LD
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": productUrl,
        "name": product.name,
        ...(product.show_description !== false && product.description
            ? { "description": product.description }
            : {}),
        "image": getAbsoluteImageUrl(product.image_url),
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "@id": "https://kalanganhandmade.in/#business",
            "name": "Kalangan Handmade"
        },
        ...(product.show_price !== false && product.price > 0 ? { "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "INR",
            "availability": product.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition",
            "url": productUrl,
            "seller": {
                "@type": "Organization",
                "@id": "https://kalanganhandmade.in/#business",
                "name": "Kalangan Handmade"
            }
        }} : {})
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalanganhandmade.in" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://kalanganhandmade.in/products" },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": productUrl }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Navbar />

            {/* WhatsApp Floating */}
            <a
                href={`https://wa.me/919833291030?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
                style={{ backgroundColor: '#25D366' }}
            >
                <MessageCircle size={26} color="#fff" />
            </a>

            <main className="flex-1 px-4 sm:px-6 py-12 sm:py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#8B0000] transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link href="/products" className="hover:text-[#8B0000] transition-colors">Products</Link>
                        <ChevronRight size={14} />
                        <span className="text-[#8B0000] font-medium truncate max-w-[200px]">{product.name}</span>
                    </nav>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Product Image */}
                        <div className="glass-card rounded-[2rem] p-4 aspect-square relative overflow-hidden">
                            <Image
                                src={product.image_url || '/logo.png'}
                                alt={`${product.name} - handmade customized gift by Kalangan`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain rounded-2xl"
                                priority
                            />
                            {!product.in_stock && (
                                <div className="absolute top-6 right-6">
                                    <span className="bg-red-500 text-white text-sm font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                                        Sold Out
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#8B0000' }}>
                                    {product.name}
                                </h1>

                                {(product.show_price !== false && product.price > 0) && (
                                    <p className="text-3xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </p>
                                )}

                                <div className="flex items-center gap-3 text-sm mb-6">
                                    <div className={`w-3 h-3 rounded-full ${product.in_stock ? 'bg-green-500' : 'bg-red-500'}`} />
                                    <span className={product.in_stock ? 'text-green-700 font-medium' : 'text-red-600 font-medium'}>
                                        {product.in_stock ? 'In Stock — Ready to Order' : 'Currently Out of Stock'}
                                    </span>
                                </div>
                            </div>

                            <div className="w-16 h-1 bg-[#8B0000] rounded-full" />

                            {product.show_description !== false && product.description && (
                                <div>
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Description</h2>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                        {product.description}
                                    </p>
                                </div>
                            )}

                            {/* Details grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="glass-card rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Material</p>
                                    <p className="text-sm text-gray-700 font-medium">Handmade</p>
                                </div>
                                <div className="glass-card rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Customization</p>
                                    <p className="text-sm text-gray-700 font-medium">Available</p>
                                </div>
                                <div className="glass-card rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Delivery</p>
                                    <p className="text-sm text-gray-700 font-medium">Pan India</p>
                                </div>
                                <div className="glass-card rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Condition</p>
                                    <p className="text-sm text-gray-700 font-medium">Brand New</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={`https://wa.me/919833291030?text=${encodeURIComponent(whatsappMsg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ backgroundColor: '#25D366', boxShadow: '0 8px 25px rgba(37,211,102,0.3)' }}
                                >
                                    <MessageCircle size={20} />
                                    Order on WhatsApp
                                </a>
                                <Link
                                    href="/products"
                                    className="flex-1 py-4 rounded-2xl font-bold text-center transition-all hover:scale-[1.02] active:scale-[0.98] border-2"
                                    style={{ borderColor: '#8B0000', color: '#8B0000' }}
                                >
                                    Browse More Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
