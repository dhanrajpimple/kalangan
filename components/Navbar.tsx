'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryLink = { href: string; label: string };

const fallbackCategoryLinks: CategoryLink[] = [
    { href: '/customized-frames', label: 'Custom Frames' },
    { href: '/table-top-frames', label: 'Table Top Frames' },
    { href: '/customized-nameplates', label: 'Nameplates' },
    { href: '/wedding-gift-frames', label: 'Wedding Frames' },
    { href: '/customized-magnets', label: 'Custom Magnets' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [categoryLinks, setCategoryLinks] = useState<CategoryLink[]>(fallbackCategoryLinks);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let active = true;

        const loadCategories = async () => {
            try {
                const { supabaseService } = await import('@/services/supabaseService');
                const categories = await supabaseService.getCategories();
                if (active && Array.isArray(categories) && categories.length > 0) {
                    setCategoryLinks(categories.map(category => ({
                        href: `/products?category=${encodeURIComponent(category.id)}`,
                        label: category.category_name,
                    })));
                }
            } catch (error) {
                console.error('Failed to load navigation categories:', error);
            }
        };

        void loadCategories();
        return () => { active = false; };
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

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white shadow-md border border-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/logo.png"
                                alt="Kalangan Handmade - कलांगण"
                                width={40}
                                height={40}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                priority
                            />
                        </div>
                        <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#8B0000]">
                            कलांगण
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-8 py-2.5 rounded-full border border-white/50 shadow-sm">
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
                        {/* Categories dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowCategories(true)}
                            onMouseLeave={() => setShowCategories(false)}
                        >
                            <button className="text-sm font-bold text-gray-800 hover:text-[#8B0000] transition-colors flex items-center gap-1">
                                Categories
                                <ChevronDown size={14} className={`transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {showCategories && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#D4AF37]/10 overflow-hidden py-2"
                                    >
                                        {categoryLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setShowCategories(false)}
                                                className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#8B0000]/5 hover:text-[#8B0000] transition-colors font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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

                {/* Mobile Menu */}
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

                                {/* Category links in mobile menu */}
                                <div className="border-t border-gray-100 mt-2 pt-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-4 py-2">Categories</p>
                                    {categoryLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (navLinks.length + i) * 0.08 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center p-3 px-4 rounded-xl text-base font-medium text-gray-600 hover:bg-[#8B0000]/5 hover:text-[#8B0000] transition-all"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
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
