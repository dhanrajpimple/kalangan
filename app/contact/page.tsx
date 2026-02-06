'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ChevronDown, MapPin, Clock, Shield, Truck } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const FAQS = [
    {
        question: 'How long does delivery take?',
        answer: 'We deliver within 5-7 business days. Custom orders may take 7-10 days.',
    },
    {
        question: 'Do you offer customization?',
        answer: 'Yes! Full customization for names, designs, and materials available.',
    },
    {
        question: 'What is your refund policy?',
        answer: '100% refund within 7 days if the product is damaged.',
    },
    {
        question: 'Can I place bulk orders?',
        answer: 'Absolutely! Special pricing for bulk orders available.',
    },
];

export default function Contact() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [showWhatsApp, setShowWhatsApp] = useState(false);

    useEffect(() => {
        setShowWhatsApp(true);
    }, []);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

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
            <section className="px-4 sm:px-6 py-12 sm:py-20">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ color: '#8B0000' }}>
                            Let's Connect
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                            We're here to help. Reach out anytime!
                        </p>
                    </div>

                    {/* Primary Contact - WhatsApp CTA */}
                    <div className="glass-card hover-lift rounded-3xl p-6 sm:p-10 mb-8 text-center animate-fade-in-up delay-100">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                            <MessageCircle size={32} color="#ffffff" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#2d2d2d' }}>
                            Chat with us
                        </h2>
                        <p className="text-gray-600 mb-6">Fastest response • Usually within minutes</p>
                        <a
                            href="https://wa.me/919146890521"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                            style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
                        >
                            <MessageCircle size={20} />
                            Open WhatsApp
                        </a>
                    </div>

                    {/* Secondary Contact Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 animate-fade-in-up delay-200">
                        <a
                            href="tel:919146890521"
                            className="glass-card hover-lift rounded-2xl p-6 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)' }}>
                                <Phone size={24} style={{ color: '#8B0000' }} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Call us</p>
                                <p className="font-semibold" style={{ color: '#8B0000' }}>+91 914 689 0521</p>
                            </div>
                        </a>
                        <a
                            href="mailto:kalangan.crafts@gmail.com"
                            className="glass-card hover-lift rounded-2xl p-6 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                                <Mail size={24} style={{ color: '#D4AF37' }} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email us</p>
                                <p className="font-semibold text-sm sm:text-base" style={{ color: '#D4AF37' }}>kalangan.crafts@gmail.com</p>
                            </div>
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-12 animate-fade-in-up delay-300">
                        <div className="glass-card rounded-xl p-4 text-center">
                            <Clock size={24} className="mx-auto mb-2" style={{ color: '#D4AF37' }} />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Quick Response</p>
                        </div>
                        <div className="glass-card rounded-xl p-4 text-center">
                            <Shield size={24} className="mx-auto mb-2" style={{ color: '#8B0000' }} />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Secure Payment</p>
                        </div>
                        <div className="glass-card rounded-xl p-4 text-center">
                            <Truck size={24} className="mx-auto mb-2" style={{ color: '#D4AF37' }} />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Fast Delivery</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="glass-card rounded-2xl p-6 mb-12 flex items-center gap-4 animate-fade-in-up delay-300">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)' }}>
                            <MapPin size={24} style={{ color: '#8B0000' }} />
                        </div>
                        <div>
                            <p className="font-semibold" style={{ color: '#8B0000' }}>Pune, Maharashtra</p>
                            <p className="text-sm text-gray-600">Nationwide shipping available</p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="animate-fade-in-up delay-400">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: '#8B0000' }}>
                            Quick Answers
                        </h2>
                        <div className="space-y-3">
                            {FAQS.map((faq, index) => (
                                <div
                                    key={index}
                                    className="glass-card rounded-xl overflow-hidden transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-5 py-4 flex items-center justify-between font-medium text-left hover:bg-white/50 transition"
                                        style={{ color: '#2d2d2d' }}
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            size={20}
                                            className="flex-shrink-0 ml-2 transition-transform duration-300"
                                            style={{
                                                color: '#D4AF37',
                                                transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}
                                        />
                                    </button>
                                    {expandedFaq === index && (
                                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-[#D4AF37]/20">
                                            <p className="pt-3">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
