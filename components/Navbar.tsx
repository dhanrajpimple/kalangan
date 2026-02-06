'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-lg' : 'bg-white/90'
                }`}
            style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Mobile: Logo + Menu Button */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="Kalangan"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-[#8B0000]/10 transition-colors"
                            style={{ color: '#8B0000' }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-between w-full relative">
                        {/* Left Links */}
                        <div className="flex items-center gap-8">
                            {navLinks.slice(0, 2).map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-700 hover:text-[#8B0000] transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Center Logo */}
                        <Link
                            href="/"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                style={{ border: '2px solid #D4AF37' }}
                            >
                                <img
                                    src="/logo.png"
                                    alt="Kalangan"
                                    className="w-12 h-12 object-contain rounded-full"
                                />
                            </div>
                        </Link>

                        {/* Right Links */}
                        <div className="flex items-center gap-8">
                            {navLinks.slice(2).map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-700 hover:text-[#8B0000] transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#D4AF37]/20 animate-fade-in-up">
                        <div className="flex flex-col gap-1">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-[#8B0000]/5 hover:text-[#8B0000] transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
