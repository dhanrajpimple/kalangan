'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Leaf, Palette, Truck, Shield, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReviewsMarquee from '@/components/ReviewsMarquee';

const FEATURES = [
    { icon: Heart, title: 'Handmade', desc: 'Crafted with love' },
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable materials' },
    { icon: Palette, title: 'Customizable', desc: 'Your design, your way' },
    { icon: Truck, title: 'Fast Delivery', desc: 'Nationwide shipping' },
    { icon: Shield, title: 'Quality', desc: 'Premium materials' },
    { icon: Users, title: '24/7 Support', desc: 'Always here for you' },
];

export default function About() {
    const [showWhatsApp, setShowWhatsApp] = useState(false);

    useEffect(() => {
        setShowWhatsApp(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* WhatsApp Floating Button */}
            {showWhatsApp && (
                <a
                    href="https://wa.me/919146890521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: '#25D366' }}
                >
                    <MessageCircle size={26} color="#ffffff" />
                </a>
            )}

            {/* Hero Section */}
            <section className="px-4 sm:px-6 py-16 sm:py-24">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6" style={{ color: '#8B0000' }}>
                            Our Story
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Celebrating the art of Indian craftsmanship, one piece at a time.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 animate-fade-in-up delay-100">
                        {/* Image */}
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-[#8B0000]/20 blur-2xl transform scale-110" />
                                <img
                                    src="/jewelry.webp"
                                    alt="Our Craft"
                                    className="relative w-full max-w-sm h-auto drop-shadow-2xl"
                                    style={{ maxHeight: '450px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#8B0000' }}>
                                Handmade with Heart
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                What started as a passion for traditional craftsmanship has grown into Kalangan — bringing authentic handmade products to your doorstep.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Every piece is created with love, care, and attention to detail using sustainable, eco-friendly materials.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8 pt-4">
                                <div>
                                    <p className="text-4xl font-black" style={{ color: '#D4AF37' }}>500+</p>
                                    <p className="text-sm text-gray-600">Happy Customers</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black" style={{ color: '#8B0000' }}>50+</p>
                                    <p className="text-sm text-gray-600">Unique Designs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us - Icon Grid */}
                    <div className="mb-20 animate-fade-in-up delay-200">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{ color: '#8B0000' }}>
                            Why Kalangan?
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {FEATURES.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="glass-card hover-lift rounded-2xl p-5 text-center"
                                >
                                    <item.icon
                                        size={28}
                                        className="mx-auto mb-3"
                                        style={{ color: idx % 2 === 0 ? '#D4AF37' : '#8B0000' }}
                                    />
                                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#2d2d2d' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="glass-card rounded-3xl p-8 sm:p-12 text-center mb-16 animate-fade-in-up delay-300">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#8B0000' }}>
                            Ready to order?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            Get your personalized piece today. We'll craft something special just for you.
                        </p>
                        <a
                            href="https://wa.me/919146890521"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                            style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <ReviewsMarquee />

            <Footer />
        </div>
    );
}
