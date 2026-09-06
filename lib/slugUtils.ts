/**
 * Slug utilities for product URLs.
 * Generates URL-safe slugs from product name + id,
 * and parses slugs back to extract the product id.
 */

/**
 * Create a URL-safe slug from a product name and ID.
 * Example: "Customized Pop-Up Frame", "static-pop-up-frame-1"
 *       → "customized-pop-up-frame--static-pop-up-frame-1"
 *
 * The double-dash "--" separates the human-readable part from the ID.
 */
export function generateSlug(name: string, id: string): string {
    const namePart = name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

    return `${namePart}--${id}`;
}

/**
 * Extract the product ID from a slug.
 * Splits on "--" and returns the last segment.
 */
export function parseSlugId(slug: string): string {
    const parts = slug.split('--');
    return parts.length > 1 ? parts[parts.length - 1] : slug;
}
