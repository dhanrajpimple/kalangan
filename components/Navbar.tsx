'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            suppressHydrationWarning
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/10'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between">

                    {/* Logo - Premium & Visible */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white shadow-md border border-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
                            <img
                                src="/logo.png"
                                alt="Kalangan"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>
                        <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#8B0000]">
                            कलांगण
                        </span>
                    </Link>

                    {/* Desktop Navigation - Centered & Tight */}
                    <div className="hidden md:flex items-center gap-10 bg-white/50 backdrop-blur-sm px-8 py-2.5 rounded-full border border-white/50 shadow-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-bold text-gray-800 hover:text-[#8B0000] transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B0000] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons / Burger */}
                    <div className="flex items-center gap-4 z-50">
                        <Link
                            href="/products"
                            className="hidden sm:flex items-center gap-2 bg-[#8B0000] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#A52A2A] transition-all shadow-lg shadow-[#8B0000]/20"
                        >
                            <ShoppingBag size={16} />
                            <span>Shop</span>
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 text-[#8B0000] shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Modern Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white border-b border-[#D4AF37]/10 shadow-2xl md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-gray-800 hover:bg-[#8B0000]/5 hover:text-[#8B0000] transition-all"
                                        >
                                            {link.label}
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                <X className="rotate-45 text-gray-300" size={14} />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-4"
                                >
                                    <Link
                                        href="/products"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full flex items-center justify-center gap-2 bg-[#8B0000] text-white p-5 rounded-2xl font-bold shadow-xl shadow-[#8B0000]/20"
                                    >
                                        <ShoppingBag size={20} />
                                        Browse Products
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
