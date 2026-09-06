/**
 * Conversion analytics for product interactions.
 * Uses the public Vercel Analytics API, with console fallback in dev.
 */

import { track } from '@vercel/analytics';

type AnalyticsEvent =
    | { name: 'view_product'; productName: string; productId: string; price: number }
    | { name: 'select_product'; productName: string; productId: string; price: number }
    | { name: 'begin_order'; itemCount: number }
    | { name: 'whatsapp_click'; productName?: string; productId?: string; context: 'product_page' | 'order_form' | 'floating_button' };

export function trackEvent(event: AnalyticsEvent): void {
    try {
        if (typeof window !== 'undefined') {
            const { name, ...properties } = event;
            track(name, properties);
        }

        // Dev logging
        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics]', event.name, event);
        }
    } catch {
        // Analytics should never break the app
    }
}
