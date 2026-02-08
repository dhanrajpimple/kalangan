'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MessageCircle, Sparkles, Heart, Package } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReviewsMarquee from '@/components/ReviewsMarquee';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    setShowWhatsApp(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Main Content - Fades in */}
      <div
        suppressHydrationWarning
        className="relative z-10 flex flex-col min-h-screen transition-opacity duration-1000 delay-500"
        style={{ opacity: isAnimating ? 0 : 1 }}
      >
        <Navbar />

        {/* WhatsApp Floating Button */}
        {showWhatsApp && !isAnimating && (
          <a
            href="https://wa.me/919833291030"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            style={{
              backgroundColor: '#25D366',
              animation: 'bounce 2s infinite'
            }}
          >
            <MessageCircle size={26} color="#ffffff" />
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
          </a>
        )}

        {/* Hero Section - Modern & Minimal */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto w-full text-center space-y-10">

            {/* Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in-up">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#D4AF37]" />
              </div>
              <span className="text-sm font-semibold text-[#8B0000]">Delivering Pan India</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4 animate-fade-in-up delay-100">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight" style={{ color: '#8B0000' }}>
                Handmade Gifts
                <span className="text-gradient block sm:inline"> & Frames</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets & keychains. Handcrafted with love for every occasion.
              </p>
            </div>

            {/* Stats - Icon focused */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto animate-fade-in-up delay-200">
              <div className="glass-card hover-lift p-4 sm:p-6 rounded-2xl text-center cursor-default">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" style={{ color: '#D4AF37' }} fill="#D4AF37" />
                <p className="text-2xl sm:text-3xl font-black" style={{ color: '#8B0000' }}>500+</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Happy</p>
              </div>
              <div className="glass-card hover-lift p-4 sm:p-6 rounded-2xl text-center cursor-default">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" style={{ color: '#8B0000' }} />
                <p className="text-2xl sm:text-3xl font-black" style={{ color: '#D4AF37' }}>100%</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Handmade</p>
              </div>
              <div className="glass-card hover-lift p-4 sm:p-6 rounded-2xl text-center cursor-default">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" style={{ color: '#D4AF37' }} />
                <p className="text-2xl sm:text-3xl font-black" style={{ color: '#8B0000' }}>50+</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Designs</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up delay-300">
              <Link
                href="/products"
                className="btn-primary px-8 py-4 rounded-full font-semibold text-base sm:text-lg text-white text-center inline-flex items-center justify-center gap-2"
              >
                Explore Collection
                <ChevronRight size={20} />
              </Link>
              <a
                href="https://wa.me/919833291030"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base sm:text-lg text-center inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={20} />
                Chat Now
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsMarquee />

        <Footer />
      </div>
    </div>
  );
}
