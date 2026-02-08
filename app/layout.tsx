import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import BackgroundDecor from '@/components/BackgroundDecor';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kalangan.vercel.app'),
  title: {
    default: 'Kalangan | Wedding Frames, Nameplates, Birthday Gifts, Customized Frames & Keychains',
    template: '%s | Kalangan'
  },
  description: 'Buy handmade wedding frames, customized nameplates, birthday gifts, personalized frames, fridge magnets & keychains online. Premium handcrafted gifts from Kalyan, Maharashtra. Pan India delivery. Best customized gift shop for weddings, birthdays, anniversaries & all occasions.',
  keywords: [
    // Product-specific keywords
    'wedding frame online India',
    'customized wedding frame',
    'handmade wedding gift frame',
    'nameplate for home',
    'personalized nameplate',
    'wooden nameplate online',
    'customized nameplate India',
    'birthday gift ideas',
    'handmade birthday gifts',
    'personalized birthday presents',
    'customized frames online',
    'photo frame customization',
    'personalized picture frames',
    'fridge magnets online India',
    'customized fridge magnets',
    'handmade fridge magnets',
    'keychains online',
    'personalized keychains',
    'customized keychains India',

    // Long-tail keywords
    'buy handmade wedding frames online India',
    'customized nameplate for home door',
    'personalized birthday gift ideas India',
    'handcrafted photo frames with names',
    'custom fridge magnets for wedding return gifts',
    'personalized keychains for couples',

    // Location-based
    'handmade gifts Kalyan Maharashtra',
    'customized frames Mumbai',
    'personalized gifts Pan India delivery',

    // Occasion-based
    'wedding return gifts',
    'anniversary gift ideas',
    'housewarming gifts',
    'engagement gifts',
    'baby shower return gifts',

    // Hindi/Marathi keywords
    'हस्तनिर्मित उपहार',
    'कस्टमाइज्ड फ्रेम',
    'हाथ से बनाया गया',

    // General craft keywords
    'handmade crafts India',
    'artisan gifts online',
    'handcrafted home decor',
    'personalized gift shop',
    'custom made gifts India'
  ],
  authors: [{ name: 'Kalangan' }],
  creator: 'Kalangan',
  publisher: 'Kalangan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kalangan | Wedding Frames, Nameplates, Birthday Gifts & Customized Keychains',
    description: 'Premium handmade wedding frames, personalized nameplates, birthday gifts, customized photo frames, fridge magnets & keychains. Handcrafted with love in Kalyan. Pan India delivery available.',
    url: 'https://kalangan.vercel.app',
    siteName: 'Kalangan',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalangan | Handmade Wedding Frames & Personalized Gifts',
    description: 'Buy customized wedding frames, nameplates, birthday gifts, fridge magnets & keychains. Handcrafted gifts for all occasions. Pan India delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kalangan",
    "alternateName": "कलांगण",
    "description": "Premium handmade wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, and keychains. Handcrafted with love for all occasions.",
    "image": "https://kalangan.vercel.app/logo.png",
    "@id": "https://kalangan.vercel.app",
    "url": "https://kalangan.vercel.app",
    "telephone": "+919833291030",
    "email": "kalangan.crafts@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalyan",
      "addressLocality": "Kalyan",
      "addressRegion": "Maharashtra",
      "postalCode": "421301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2403,
      "longitude": 73.1305
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/__kalangan_?igsh=cjF6dzJnODlhcjlm"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Handmade Gifts & Customized Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Wedding Frames",
          "description": "Handmade customized wedding frames for couples"
        },
        {
          "@type": "OfferCatalog",
          "name": "Nameplates",
          "description": "Personalized nameplates for home and office"
        },
        {
          "@type": "OfferCatalog",
          "name": "Birthday Gifts",
          "description": "Customized handmade birthday gift items"
        },
        {
          "@type": "OfferCatalog",
          "name": "Customized Frames",
          "description": "Personalized photo frames with names and designs"
        },
        {
          "@type": "OfferCatalog",
          "name": "Fridge Magnets",
          "description": "Handcrafted customized fridge magnets"
        },
        {
          "@type": "OfferCatalog",
          "name": "Keychains",
          "description": "Personalized keychains for all occasions"
        }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundDecor />
        <main className="relative z-10 w-full">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
