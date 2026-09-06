import React from 'react';
import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductsClient from '@/components/ProductsClient';
import { getCategories, getProductsByCategory } from '@/services/supabaseServer';
import type { Product } from '@/services/supabaseServer';
import { generateSlug } from '@/lib/slugUtils';

// --- Static fallback products (same data as before) ---
const staticProducts: Product[] = [
    {
        id: 'static-pop-up-frame-1',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 8 by 8 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/1.webp',
        best_seller: true,
        price: 550.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:00:00+00:00',
    },
    {
        id: 'static-pop-up-frame-3',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 5 by 7 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/3.webp',
        best_seller: true,
        price: 450.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:01:00+00:00',
    },
    {
        id: 'static-pop-up-frame-2',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 8 by 8 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/2.webp',
        best_seller: true,
        price: 550.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:02:00+00:00',
    },
    {
        id: 'static-pop-up-frame-4',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 4 by 4 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/4.webp',
        best_seller: true,
        price: 250.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:03:00+00:00',
    },
    {
        id: 'static-pop-up-frame-5',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 8 by 8 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/5.webp',
        best_seller: true,
        price: 550.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:04:00+00:00',
    },
    {
        id: 'static-pop-up-frame-6',
        name: 'Customized Pop-Up Frame',
        description: 'Size - 6 by 8 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/6.webp',
        best_seller: true,
        price: 550.00,
        in_stock: true,
        category_id: 'f0987d80-7727-4b2f-8518-bf75188689f3',
        created_at: '2026-05-23T10:05:00+00:00',
    },
    {
        id: 'static-wedding-frame-7',
        name: 'Combo Set of 3 Frames',
        description: 'Decorate your hall with our frames created to make every space perfect.\r\nSize - 12 by 18 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/7.webp',
        best_seller: true,
        price: 2999.00,
        in_stock: true,
        category_id: '05338b97-f137-42d6-88d5-43e78214642d',
        created_at: '2026-05-23T10:06:00+00:00',
    },
    {
        id: 'static-batches-8',
        name: 'Customized Batches for Wedding',
        description: 'Customized batches for wedding',
        show_description: true,
        image_url: '/8.webp',
        best_seller: true,
        price: 80.00,
        in_stock: true,
        category_id: '56fe919b-a8a8-44f2-b694-bbf7d219c1c9',
        created_at: '2026-05-23T10:07:00+00:00',
    },
    {
        id: 'static-batches-9',
        name: 'Customized Batches for Special Occasion',
        description: 'Customized batches for special occasion',
        show_description: true,
        image_url: '/9.webp',
        best_seller: true,
        price: 80.00,
        in_stock: true,
        category_id: '56fe919b-a8a8-44f2-b694-bbf7d219c1c9',
        created_at: '2026-05-23T10:08:00+00:00',
    },
    {
        id: 'static-table-top-10',
        name: 'Vitthal Mauli',
        description: 'Size - 4 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/10.webp',
        best_seller: true,
        price: 250.00,
        in_stock: true,
        category_id: '98c4217c-dba9-4737-81df-8af08d7b8871',
        created_at: '2026-05-23T10:09:00+00:00',
    },
    {
        id: 'static-table-top-11',
        name: 'Shree Swami Samarth',
        description: 'Size - 4 inch\r\nCustomization Available',
        show_description: true,
        image_url: '/11.webp',
        best_seller: true,
        price: 175.00,
        in_stock: true,
        category_id: '98c4217c-dba9-4737-81df-8af08d7b8871',
        created_at: '2026-05-23T10:10:00+00:00',
    },
];

// --- Metadata ---
export const metadata: Metadata = {
    title: 'Handmade Products | Customized Frames, Gifts & Keepsakes',
    description: 'Browse handmade products by Kalangan — customized pop-up frames, wedding frames, table top frames, nameplates, fridge magnets, keychains and personalized gifts. Order via WhatsApp with Pan India delivery.',
    alternates: { canonical: '/products' },
    openGraph: {
        title: 'Handmade Products | Kalangan Handmade',
        description: 'Explore handmade customized frames, wedding gifts, nameplates, magnets and keychains from Kalangan. Pan India delivery.',
        url: 'https://kalanganhandmade.in/products',
        type: 'website',
        images: [{ url: '/1.webp', width: 800, height: 1000, alt: 'Kalangan Handmade product collection' }],
    },
};

// --- Helper ---
function getAbsoluteImageUrl(imageUrl: string): string {
    if (!imageUrl) return 'https://kalanganhandmade.in/logo.png';
    return imageUrl.startsWith('http') ? imageUrl : `https://kalanganhandmade.in${imageUrl}`;
}

function mergeProducts(apiProducts: Product[], localProducts: Product[]): Product[] {
    const productMap = new Map<string, Product>();
    [...apiProducts, ...localProducts].forEach(product => {
        productMap.set(product.id, product);
    });
    return Array.from(productMap.values());
}

// --- Server Component ---
export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category: requestedCategory } = await searchParams;

    // Fetch data on the server — this HTML is sent to crawlers
    const [categories, apiProducts] = await Promise.all([
        getCategories(),
        getProductsByCategory(requestedCategory || null, !requestedCategory),
    ]);

    const matchingStaticProducts = requestedCategory
        ? staticProducts.filter(product => product.category_id === requestedCategory)
        : staticProducts.filter(product => product.best_seller);
    const allProducts = mergeProducts(apiProducts, matchingStaticProducts);
    const selectedCategoryName = requestedCategory
        ? categories.find(category => category.id === requestedCategory)?.category_name || 'Handmade Gifts'
        : 'Best Selling Handmade Gifts';

    // Server-rendered JSON-LD with real product data
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": selectedCategoryName,
        "description": "Discover Kalangan Handmade products including handmade craft frames, table top frames, wedding frames, customized nameplates, personalized photo frames, fridge magnets, keychains and return gifts.",
        "numberOfItems": allProducts.length,
        "itemListElement": allProducts.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://kalanganhandmade.in/products/${generateSlug(product.name, product.id)}`,
            "name": product.name,
            "item": {
                "@type": "Product",
                "@id": `https://kalanganhandmade.in/products/${generateSlug(product.name, product.id)}`,
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
                    "url": `https://kalanganhandmade.in/products/${generateSlug(product.name, product.id)}`
                }} : {})
            }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalanganhandmade.in" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://kalanganhandmade.in/products" }
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
            <a
                href="https://wa.me/919833291030"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all font-inter"
                style={{ backgroundColor: '#25D366' }}
            >
                <MessageCircle size={26} color="#fff" />
            </a>

            {/* Main */}
            <section className="flex-1 px-4 sm:px-6 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 px-2" style={{ color: '#8B0000' }}>
                            Handmade Collection
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base px-4">Wedding Frames, Nameplates, Birthday Gifts, Customized Frames, Fridge Magnets &amp; Keychains</p>
                    </div>

                    {/* Interactive client part: categories, grid, modals */}
                    <ProductsClient
                        key={requestedCategory || 'best-seller'}
                        initialProducts={allProducts}
                        initialCategories={categories}
                        staticProducts={staticProducts}
                        initialSelectedCategory={requestedCategory || 'Best Seller'}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
