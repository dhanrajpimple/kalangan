'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function BackgroundDecor() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // For home page, we animate. For others, we show static.
    const [isAnimating, setIsAnimating] = useState(isHomePage);

    useEffect(() => {
        if (isHomePage) {
            // Reset animation state when visiting home
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            // Ensure static state immediately for other pages
            setIsAnimating(false);
        }
    }, [isHomePage, pathname]);

    // Determine styles based on route and animation state
    // content starts (opacity 1, scale 1.1) on Home load, then goes to (opacity 0.15, scale 1)
    // On other pages, it is always (opacity 0.15, scale 1)

    const getRightImageStyle = () => {
        if (isHomePage && isAnimating) {
            return {
                transform: 'translateX(0) scale(1.1)',
                opacity: 1,
                zIndex: 50,
                filter: 'none'
            };
        }
        return {
            transform: 'translateX(30%) scale(1)', // Static position
            opacity: 0.15,
            zIndex: 0,
            filter: 'grayscale(20%) sepia(20%)'
        };
    };

    const getLeftImageStyle = () => {
        if (isHomePage && isAnimating) {
            return {
                transform: 'translateX(0) scale(1.1)',
                opacity: 1,
                zIndex: 50,
                filter: 'none'
            };
        }
        return {
            transform: 'translateX(-30%) scale(1)', // Static position
            opacity: 0.15,
            zIndex: 0,
            filter: 'grayscale(20%) sepia(20%)'
        };
    };

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FFFDD0]">
            {/* Right Image */}
            <div
                className="absolute right-0 top-0 h-full flex items-center justify-end transition-all duration-1000 ease-in-out"
                style={{
                    ...getRightImageStyle(),
                    opacity: (isHomePage && isAnimating) ? 1 : 0.25,
                    transform: (isHomePage && isAnimating) ? 'translateX(0) scale(1.1)' : 'translateX(20%) scale(1)',
                    zIndex: 1
                }}
            >
                <img
                    src="/right.png"
                    alt="Decorative Right"
                    className="w-[250px] sm:w-[350px] md:w-[600px] object-contain"
                />
            </div>

            {/* Left Image */}
            <div
                className="absolute left-0 top-0 h-full flex items-center justify-start transition-all duration-1000 ease-in-out"
                style={{
                    ...getLeftImageStyle(),
                    opacity: (isHomePage && isAnimating) ? 1 : 0.25,
                    transform: (isHomePage && isAnimating) ? 'translateX(0) scale(1.1)' : 'translateX(-20%) scale(1)',
                    zIndex: 1
                }}
            >
                <img
                    src="/left.png"
                    alt="Decorative Left"
                    className="w-[250px] sm:w-[350px] md:w-[600px] object-contain"
                />
            </div>

            {/* Theme Overlay - Provides the color tint over the images */}
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                    backgroundColor: '#FFFDD0',
                    opacity: (isHomePage && isAnimating) ? 0 : 0.4, // Reduced from 0.6 for better visibility
                    zIndex: 2
                }}
            />
        </div>
    );
}
