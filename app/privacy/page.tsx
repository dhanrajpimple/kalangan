'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Privacy() {
    return (
        <div style={{ color: '#2d2d2d', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="flex-1">
                <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
                    <h1 className="text-5xl font-black" style={{ color: '#8B0000' }}>
                        Privacy Policy
                    </h1>

                    <div style={{ backgroundColor: '#ffffff', borderLeft: '8px solid #D4AF37' }} className="p-8 rounded-lg space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We collect information you provide to us when placing an order, including your name, address, phone number, and email address. This information is necessary to process and deliver your orders.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your information is used to process orders, send confirmations, and communicate about your purchase. We may also use it to improve our products and services and to contact you about future offerings.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                3. Data Security
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We take appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                4. Sharing Your Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We do not sell or share your personal information with third parties, except as necessary to process your order (such as with shipping partners) or as required by law.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                5. Cookies
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may use cookies to enhance your browsing experience. You can disable cookies through your browser settings, though this may affect functionality.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                6. Third-Party Links
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before sharing information.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                7. Contact Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have questions about our privacy practices, please contact us via WhatsApp at +91 9146890521 or email us at kalangan@example.com.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                8. Policy Updates
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to update this privacy policy at any time. Changes will be effective immediately upon posting to the website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
