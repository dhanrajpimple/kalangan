'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RefundPolicy() {
    return (
        <div style={{ color: '#2d2d2d', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="flex-1">
                <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
                    <h1 className="text-5xl font-black" style={{ color: '#8B0000' }}>
                        Refund & Return Policy
                    </h1>

                    <div style={{ backgroundColor: '#ffffff', borderLeft: '8px solid #D4AF37' }} className="p-8 rounded-lg space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                1. Return Eligibility
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Items can be returned within 7 days of delivery if they are defective, damaged, or do not match the product description. Customized or personalized items cannot be returned unless they have manufacturing defects.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                2. How to Initiate a Return
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                To return an item, contact us via WhatsApp at +91 98332 91030 with a photo of the product and the reason for return. We will provide you with return shipping instructions.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                3. Shipping Costs
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                For defective or damaged items, we cover the return shipping cost. For other returns, the customer is responsible for return shipping unless the return is due to our error.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                4. Refund Processing
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Once we receive and inspect the returned item, we will process your refund within 7-10 business days. Refunds are issued to the original payment method.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                5. Refund Conditions
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Items must be in original condition for refund. Items showing signs of use or damage from mishandling may be rejected or subject to a restocking fee.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                6. Non-Returnable Items
                            </h2>
                            <ul className="text-gray-700 space-y-2 leading-relaxed">
                                <li>• Items purchased more than 7 days ago</li>
                                <li>• Customized or personalized products (unless defective)</li>
                                <li>• Items without original packaging</li>
                                <li>• Items showing signs of wear or damage from misuse</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                7. Exchanges
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We offer exchanges for defective items at no additional charge. Please contact us to arrange an exchange within 7 days of delivery.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold" style={{ color: '#8B0000' }}>
                                8. Contact for Issues
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                For any refund or return questions, contact us via WhatsApp at +91 98332 91030 or email kalangan.crafts@gmail.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
