'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const reviews = [
    { name: 'Priya S.', text: 'Absolutely in love with my custom piece! The quality is insane 💕', rating: 5 },
    { name: 'Ananya P.', text: 'Best gift ever! My mom was so happy. Definitely ordering again', rating: 5 },
    { name: 'Divya S.', text: 'Handmade excellence. Worth every penny! 10/10', rating: 5 },
    { name: 'Isha G.', text: 'Fast delivery, amazing packaging. Obsessed!', rating: 5 },
    { name: 'Riya M.', text: 'The detailing is exquisite. Unique and beautiful!', rating: 5 },
    { name: 'Sanya K.', text: 'Loved the personalized touch. Will shop again!', rating: 5 },
];

export default function ReviewsMarquee() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <section className="w-full py-12 sm:py-16 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#8B0000' }}>
                    Customer Love
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">Real reviews from real people ⭐</p>
            </div>

            {/* Mobile: Carousel */}
            <div className="md:hidden px-4">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex-[0_0_85%] min-w-0">
                                <div className="glass-card p-5 rounded-2xl h-full">
                                    <div className="flex gap-0.5 mb-3">
                                        {Array(review.rating).fill(0).map((_, i) => (
                                            <Star key={i} size={14} style={{ color: '#D4AF37', fill: '#D4AF37' }} />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-3">"{review.text}"</p>
                                    <p className="font-semibold text-sm" style={{ color: '#8B0000' }}>{review.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop: Marquee */}
            <div className="hidden md:block relative overflow-hidden">
                <div className="flex animate-marquee gap-6">
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="glass-card hover-lift w-[320px] flex-shrink-0 p-6 rounded-2xl cursor-default"
                        >
                            <div className="flex gap-0.5 mb-3">
                                {Array(review.rating).fill(0).map((_, i) => (
                                    <Star key={i} size={14} style={{ color: '#D4AF37', fill: '#D4AF37' }} />
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">"{review.text}"</p>
                            <p className="font-semibold text-sm" style={{ color: '#8B0000' }}>{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Animation */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
