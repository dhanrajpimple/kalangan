import { MetadataRoute } from 'next'
import { getAllProducts } from '@/services/supabaseServer'
import type { Product } from '@/services/supabaseServer'
import { generateSlug } from '@/lib/slugUtils'

// Static fallback products for sitemap generation
const staticProducts: Array<{ id: string; name: string; updated_at?: string }> = [
    { id: 'static-pop-up-frame-1', name: 'Customized Pop-Up Frame' },
    { id: 'static-pop-up-frame-3', name: 'Customized Pop-Up Frame' },
    { id: 'static-pop-up-frame-2', name: 'Customized Pop-Up Frame' },
    { id: 'static-pop-up-frame-4', name: 'Customized Pop-Up Frame' },
    { id: 'static-pop-up-frame-5', name: 'Customized Pop-Up Frame' },
    { id: 'static-pop-up-frame-6', name: 'Customized Pop-Up Frame' },
    { id: 'static-wedding-frame-7', name: 'Combo Set of 3 Frames' },
    { id: 'static-batches-8', name: 'Customized Batches for Wedding' },
    { id: 'static-batches-9', name: 'Customized Batches for Special Occasion' },
    { id: 'static-table-top-10', name: 'Vitthal Mauli' },
    { id: 'static-table-top-11', name: 'Shree Swami Samarth' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://kalanganhandmade.in'

    // Static pages — no lastModified since we don't have accurate dates
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl },
        { url: `${baseUrl}/products` },
        { url: `${baseUrl}/customized-frames` },
        { url: `${baseUrl}/table-top-frames` },
        { url: `${baseUrl}/customized-nameplates` },
        { url: `${baseUrl}/wedding-gift-frames` },
        { url: `${baseUrl}/customized-magnets` },
        { url: `${baseUrl}/about` },
        { url: `${baseUrl}/contact` },
        { url: `${baseUrl}/privacy` },
        { url: `${baseUrl}/refund` },
        { url: `${baseUrl}/terms` },
    ]

    // Product pages from static data
    const staticProductPages: MetadataRoute.Sitemap = staticProducts.map(p => ({
        url: `${baseUrl}/products/${generateSlug(p.name, p.id)}`,
    }))

    // Product pages from Supabase with real updated_at dates
    let apiProductPages: MetadataRoute.Sitemap = []
    try {
        const apiProducts: Product[] = await getAllProducts()
        const seenIds = new Set(staticProducts.map(p => p.id))

        apiProductPages = apiProducts
            .filter(p => !seenIds.has(p.id))
            .map(p => {
                const entry: MetadataRoute.Sitemap[number] = {
                    url: `${baseUrl}/products/${generateSlug(p.name, p.id)}`,
                }
                // Only include lastModified when we have a real date
                if (p.updated_at) {
                    entry.lastModified = new Date(p.updated_at)
                } else if (p.created_at) {
                    entry.lastModified = new Date(p.created_at)
                }
                return entry
            })
    } catch (error) {
        console.error('Sitemap: failed to fetch API products', error)
    }

    return [...staticPages, ...staticProductPages, ...apiProductPages]
}
