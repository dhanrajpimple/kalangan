'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative" style={{ backgroundColor: '#8B0000' }}>
            {/* Decorative top border */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <h3 className="text-2xl font-black text-white">KALANGAN</h3>
                        <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                            Handcrafted excellence for your home. Each piece made with love.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#D4AF37] hover:text-[#8B0000] text-white transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/919146890521"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#25D366] text-white transition-all duration-300"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Navigate</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Products', 'Contact'].map(item => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund" className="text-sm text-white/70 hover:text-white transition-colors">
                                    Refund
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>+91 914 689 0521</li>
                            <li className="break-all">kalangan.crafts@gmail.com</li>
                            <li>Pune, India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50">
                        © {currentYear} Kalangan. All rights reserved.
                    </p>
                    <p className="text-xs text-white/50">
                        Made with ❤️ in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
