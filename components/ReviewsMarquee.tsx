'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    { name: 'Priya S.', text: 'Absolutely in love with my custom piece! The quality is insane 💕', rating: 5 },
    { name: 'Ananya P.', text: 'Best gift ever! My mom was so happy. Definitely ordering again', rating: 5 },
    { name: 'Divya S.', text: 'Handmade excellence. Worth every penny! 10/10', rating: 5 },
    { name: 'Isha G.', text: 'Fast delivery, amazing packaging. Obsessed!', rating: 5 },
    { name: 'Riya M.', text: 'The detailing is exquisite. Unique and beautiful!', rating: 5 },
    { name: 'Sanya K.', text: 'Loved the personalized touch. Will shop again!', rating: 5 },
];

export default function ReviewsMarquee() {
    // Duplicate reviews multiple times to ensure the track is very long
    const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

    return (
        <section className="w-full py-16 sm:py-24 overflow-hidden border-y border-[#D4AF37]/10">
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10 mb-4">
                    <Star size={14} className="text-[#D4AF37]" fill="#D4AF37" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">Testimonials</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: '#8B0000' }}>
                    Customer Stories
                </h2>
                <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            </div>

            {/* Infinite Marquee Track */}
            <div className="relative flex overflow-hidden py-4">
                <motion.div
                    className="flex gap-4 sm:gap-6 flex-nowrap"
                    animate={{
                        x: [0, -1500], // Adjust based on total width of one set of cards
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={index}
                            className="glass-card w-[280px] sm:w-[320px] flex-shrink-0 p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/20 relative group hover:border-[#D4AF37]/50 transition-all duration-500"
                            style={{
                                background: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 10px 30px -10px rgba(139, 0, 0, 0.1)'
                            }}
                        >
                            <Quote className="absolute top-4 right-6 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors" size={40} />

                            <div className="flex gap-0.5 mb-4">
                                {Array(review.rating).fill(0).map((_, i) => (
                                    <Star key={i} size={16} className="text-[#D4AF37]" fill="#D4AF37" />
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#D4AF37] flex items-center justify-center text-white text-xs font-bold">
                                    {review.name[0]}
                                </div>
                                <p className="font-bold text-sm tracking-tight" style={{ color: '#8B0000' }}>
                                    {review.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
