'use client';

import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Terms() {
    return (
        <div style={{ color: '#2d2d2d', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="flex-1">
                <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
                    <h1 className="text-5xl font-black" style={{ color: '#8B0000' }}>
                        Terms & Conditions
                    </h1>

                    <div style={{ backgroundColor: '#ffffff', borderLeft: '8px solid #D4AF37' }} className="p-8 rounded-lg space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                1. Agreement to Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                2. Product Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All products sold on this website are handcrafted and unique. Slight variations in color, size, and design may occur and are part of the charm of handmade items. We strive to ensure product descriptions and images are accurate.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                3. Pricing and Availability
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All prices are subject to change without notice. We reserve the right to limit quantities and discontinue any product. Products are offered on an as-available basis.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                4. Order Acceptance
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to refuse or cancel any order. Confirmation of an order is not an acceptance of an offer to sell but, rather, an invitation to make an offer.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                5. Shipping and Delivery
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Orders are typically shipped within 5-7 business days. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping partners or unforeseen circumstances.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                6. Returns and Refunds
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Items can be returned within 7 days of receipt if they are defective or damaged. Customized items cannot be returned unless they have manufacturing defects.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                7. Limitation of Liability
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kalangan is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the materials or services.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                8. Changes to Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify these terms at any time. Your continued use of the site following the posting of revised Terms means that you accept and agree to the changes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
