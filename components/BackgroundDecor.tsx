'use client';

import React from 'react';

export default function BackgroundDecor() {
    // Images are now static in the background as per user request to stop animation

    return (
        <div suppressHydrationWarning className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FFFDD0]">
            {/* Right Image */}
            <div
                className="absolute right-0 top-0 h-full flex items-center justify-end"
                style={{
                    opacity: 0.15,
                    transform: 'translateX(20%) translateY(5%) scale(1)', // Pushed down 5% to prevent head clipping
                    zIndex: 1,
                    filter: 'grayscale(20%) sepia(20%)'
                }}
            >
                <img
                    src="/right.png"
                    alt="Decorative Right"
                    className="w-[250px] sm:w-[350px] md:w-[600px] object-contain max-h-[85vh]"
                />
            </div>

            {/* Left Image */}
            <div
                className="absolute left-0 top-0 h-full flex items-center justify-start"
                style={{
                    opacity: 0.15,
                    transform: 'translateX(-20%) translateY(5%) scale(1)', // Pushed down 5% to prevent head clipping
                    zIndex: 1,
                    filter: 'grayscale(20%) sepia(20%)'
                }}
            >
                <img
                    src="/left.png"
                    alt="Decorative Left"
                    className="w-[250px] sm:w-[350px] md:w-[600px] object-contain max-h-[85vh]"
                />
            </div>

            {/* Theme Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: '#FFFDD0',
                    opacity: 0.4,
                    zIndex: 2
                }}
            />
        </div>
    );
}
