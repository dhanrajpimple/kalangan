/**
 * Server-side Supabase service for Server Components.
 * Uses fetch() with next.revalidate for ISR caching.
 * Never import this in 'use client' files.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const REVALIDATE_SECONDS = 3600; // 1 hour cache

export interface Category {
    id: string;
    category_name: string;
}

export interface Product {
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
    created_at?: string;
    updated_at?: string;
}

async function fetchRpc<T>(rpcName: string, body: Record<string, unknown> = {}): Promise<T> {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
        console.error('Supabase configuration is missing. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
        return [] as unknown as T;
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${rpcName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify(body),
        next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
        console.error(`RPC ${rpcName} failed: ${response.status} ${response.statusText}`);
        return [] as unknown as T;
    }

    return response.json();
}

export async function getCategories(): Promise<Category[]> {
    try {
        return await fetchRpc<Category[]>('get_categories');
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return [];
    }
}

export async function getProductsByCategory(
    categoryId: string | null = null,
    bestsellerOnly: boolean = false
): Promise<Product[]> {
    try {
        return await fetchRpc<Product[]>('get_products_by_category', {
            cat_id: categoryId,
            bestseller_only: bestsellerOnly,
        });
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}

export async function getAllProducts(): Promise<Product[]> {
    try {
        return await fetchRpc<Product[]>('get_products_by_category', {
            cat_id: null,
            bestseller_only: false,
        });
    } catch (error) {
        console.error('Failed to fetch all products:', error);
        return [];
    }
}

export async function getProductById(productId: string): Promise<Product | null> {
    try {
        const allProducts = await getAllProducts();
        return allProducts.find(p => p.id === productId) ?? null;
    } catch (error) {
        console.error('Failed to fetch product by ID:', error);
        return null;
    }
}
