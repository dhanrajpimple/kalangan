'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, MessageCircle, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#8B0000] text-white pt-16 pb-8 overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black tracking-tighter italic">कलांगण</h3>
                            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                                Handcrafted excellence for your home. Each piece is a testament to traditional Indian artistry, made with love and precision.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/__kalangan_?igsh=cjF6dzJnODlhcjlm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 hover:bg-[#D4AF37] hover:text-[#8B0000] transition-all duration-300 group"
                            >
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/919833291030"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 hover:bg-[#25D366] transition-all duration-300 group"
                            >
                                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest">Explore</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {['Home', 'About', 'Products', 'Contact'].map(item => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-6">
                        <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest">Support</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {['Terms', 'Privacy', 'Refund'].map(item => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm text-white/70 leading-snug">+91 98332 91030</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm text-white/70 break-all leading-snug">kalangan.crafts@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm text-white/70 leading-snug">Kalyan, Maharashtra | Pan India Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <p className="text-xs text-white/40" suppressHydrationWarning>
                                © {currentYear} Kalangan. All rights reserved.
                            </p>
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                                Handcrafted with Pride in India
                            </p>
                        </div>

                        <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-colors group">
                            <span className="text-[11px] text-white/50">Managed & Developed by</span>
                            <a
                                href="https://dhanrajpimple.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1"
                            >
                                Dhanraj Pimple
                                <ExternalLink size={10} className="opacity-50 group-hover:opacity-100" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
