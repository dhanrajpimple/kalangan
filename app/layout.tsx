import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import BackgroundDecor from '@/components/BackgroundDecor';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kalanganhandmade.in'),
  applicationName: 'Kalangan Handmade',
  verification: {
    google: 'VaXszaSOtruwDwMIseI5V-nBAqQeA7f7RFbrIv3so30'
  },
  title: {
    default: 'Kalangan Handmade | कलांगण | Handmade Gifts & Customized Frames',
    template: '%s | Kalangan Handmade'
  },
  description: 'Kalangan Handmade (कलांगण) offers handmade wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, keychains and return gifts. Based in Mumbai, Maharashtra with Pan India delivery.',
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'x-default': '/',
    },
  },
  // keywords removed — Google ignores meta keywords entirely
  authors: [{ name: 'Kalangan Handmade' }],
  creator: 'Kalangan Handmade',
  publisher: 'Kalangan Handmade',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kalangan Handmade | कलांगण | Handmade Gifts & Customized Frames',
    description: 'Kalangan Handmade is a Mumbai-based handmade gifting business for wedding frames, personalized nameplates, birthday gifts, photo frames, fridge magnets, keychains and return gifts.',
    url: 'https://kalanganhandmade.in',
    siteName: 'Kalangan Handmade',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Kalangan Handmade logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalangan Handmade | Handmade Gifts & Personalized Frames',
    description: 'Buy handmade wedding frames, nameplates, birthday gifts, fridge magnets and keychains from Kalangan Handmade. Pan India delivery.',
    images: ['/logo.png'],
  },
  appleWebApp: {
    title: 'Kalangan Handmade',
  },
  // Removed unsupported 'other' metadata (business-name, product:category)
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
  // Single consolidated structured data graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kalanganhandmade.in/#website",
        "url": "https://kalanganhandmade.in",
        "name": "Kalangan Handmade",
        "alternateName": ["Kalangan", "कलांगण"],
        "description": "Official website of Kalangan Handmade, a handmade and customized gift business in Mumbai, Maharashtra.",
        "publisher": {
          "@id": "https://kalanganhandmade.in/#business"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kalanganhandmade.in/#business",
        "name": "Kalangan Handmade",
        "legalName": "Kalangan Handmade",
        "alternateName": ["Kalangan", "कलांगण"],
        "description": "Kalangan Handmade is a Mumbai-based handmade gift business offering wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, keychains and return gifts with Pan India delivery.",
        "image": "https://kalanganhandmade.in/logo.png",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kalanganhandmade.in/logo.png",
          "width": 512,
          "height": 512
        },
        "url": "https://kalanganhandmade.in",
        "telephone": "+919833291030",
        "email": "kalanganhandmade@gmail.com",
        "priceRange": "₹80 - ₹3000",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
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
              "name": "Customized Frames",
              "url": "https://kalanganhandmade.in/customized-frames"
            },
            {
              "@type": "OfferCatalog",
              "name": "Table Top Frames",
              "url": "https://kalanganhandmade.in/table-top-frames"
            },
            {
              "@type": "OfferCatalog",
              "name": "Nameplates",
              "url": "https://kalanganhandmade.in/customized-nameplates"
            },
            {
              "@type": "OfferCatalog",
              "name": "Wedding & Gift Frames",
              "url": "https://kalanganhandmade.in/wedding-gift-frames"
            },
            {
              "@type": "OfferCatalog",
              "name": "Customized Magnets",
              "url": "https://kalanganhandmade.in/customized-magnets"
            }
          ]
        }
      }
    ]
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
