export const supabaseService = {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

    async fetchRpc(rpcName: string, body: any = {}) {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/rpc/${rpcName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': this.supabaseKey!,
                    'Authorization': `Bearer ${this.supabaseKey}`
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`RPC ${rpcName} failed: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error calling RPC ${rpcName}:`, error);
            throw error;
        }
    },

    async getCategories() {
        return this.fetchRpc('get_categories');
    },

    async getProductsByCategory(categoryId: string | null = null, bestsellerOnly: boolean = false) {
        return this.fetchRpc('get_products_by_category', {
            cat_id: categoryId,
            bestseller_only: bestsellerOnly
        });
    }
};
