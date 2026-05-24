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
  description: 'Kalangan Handmade, also known as कलांगण, is a handmade gift business in Mumbai offering wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, keychains and return gifts with Pan India delivery.',
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'x-default': '/',
    },
  },
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
    'table top frames',
    'table top handmade gifts',
    'devotional table top frames',
    'Vitthal Mauli table top',
    'Shree Swami Samarth table top',
    'fridge magnets online India',
    'customized fridge magnets',
    'handmade fridge magnets',
    'keychains online',
    'personalized keychains',
    'customized keychains India',

    // Long-tail keywords - Wedding related
    'buy handmade wedding frames online India',
    'customized nameplate for home door',
    'personalized birthday gift ideas India',
    'handcrafted photo frames with names',
    'custom fridge magnets for wedding return gifts',
    'personalized keychains for couples',
    'where to buy wedding frames online',
    'best handmade wedding gift frames',
    'unique wedding gift ideas India',
    'customized wedding frames with names',
    'personalized wedding photo frames online',
    'handmade wedding return gift ideas',
    'affordable wedding frames online India',
    'wedding couple frames with names',
    'customized wedding anniversary frames',
    'handmade wedding keepsake frames',

    // Long-tail keywords - Nameplate related
    'wooden nameplate for main door',
    'customized nameplate with family name',
    'personalized house nameplate online',
    'handmade nameplate designs India',
    'buy nameplate for home online',
    'customized nameplate for office door',
    'wooden nameplate with LED lights',
    'personalized nameplate for couples',
    'handcrafted nameplate for home entrance',
    'unique nameplate designs for home',

    // Long-tail keywords - Birthday related
    'unique birthday gift ideas for best friend',
    'personalized birthday gifts for girlfriend',
    'handmade birthday gifts for boyfriend',
    'customized birthday photo frames',
    'personalized birthday keychains online',
    'handmade birthday return gifts',
    'unique birthday gift for wife',
    'customized birthday gifts for husband',
    'personalized birthday fridge magnets',
    'handcrafted birthday gift items',

    // Long-tail keywords - Customization related
    'how to order customized photo frames',
    'personalized gifts with names and photos',
    'custom made photo frames online India',
    'handmade personalized gifts for couples',
    'customized gifts for all occasions',
    'personalized photo frames for anniversary',
    'custom name frames online',
    'handcrafted personalized keepsakes',

    // Long-tail keywords - Fridge magnets
    'customized fridge magnets for wedding',
    'personalized fridge magnets with photos',
    'handmade fridge magnets for return gifts',
    'custom fridge magnets for baby shower',
    'unique fridge magnet designs India',
    'personalized refrigerator magnets online',
    'handcrafted fridge magnets for events',

    // Long-tail keywords - Keychains
    'personalized keychains for couples online',
    'customized keychains with names',
    'handmade keychains for return gifts',
    'unique keychain designs India',
    'personalized photo keychains online',
    'custom keychains for wedding favors',
    'handcrafted keychains for gifts',

    // Location-based long-tail
    'handmade gifts Mumbai Maharashtra',
    'customized frames Mumbai',
    'personalized gifts Pan India delivery',
    'handmade gift shop in Mumbai',
    'customized frames delivery all over India',
    'personalized gifts Mumbai to Delhi',
    'handcrafted items Pan India shipping',
    'best handmade gift store Mumbai',
    'customized gifts online India free shipping',

    // Occasion-based long-tail
    'wedding return gifts',
    'anniversary gift ideas',
    'housewarming gifts',
    'engagement gifts',
    'baby shower return gifts',
    'unique return gifts for wedding guests',
    'personalized anniversary gifts for parents',
    'handmade housewarming gift ideas',
    'customized engagement return gifts',
    'baby shower return gift ideas India',
    'birthday return gifts for kids',
    'personalized gifts for Diwali',
    'handmade gifts for Valentine Day',
    'customized gifts for Mother Day',
    'personalized Father Day gift ideas',
    'handcrafted gifts for Raksha Bandhan',
    'wedding anniversary gifts for couple',
    'haldi kunku return gifts',
    'griha pravesh gift ideas',

    // Question-based long-tail keywords
    'what are the best handmade gift ideas',
    'where to buy customized frames online',
    'how to order personalized wedding frames',
    'which is the best handmade gift shop',
    'what to gift for wedding anniversary',
    'where to get customized nameplates',
    'how much do customized frames cost',
    'what are unique birthday gift ideas',

    // Hindi/Marathi keywords
    'कलांगण',
    'कलांगण handmade gifts',
    'Kalangan Handmade',
    'Kalangan Handmade Mumbai',
    'हस्तनिर्मित उपहार',
    'कस्टमाइज्ड फ्रेम',
    'हाथ से बनाया गया',
    'शादी के लिए हस्तनिर्मित फ्रेम',
    'नाम की तख्ती',
    'व्यक्तिगत उपहार',

    // General craft keywords
    'handmade crafts India',
    'artisan gifts online',
    'handcrafted home decor',
    'personalized gift shop',
    'custom made gifts India',
    'handmade gift items online',
    'handmade gifts online India',
    'handmade gifts India',
    'unique handmade gift',
    'unique handmade gifts India',
    'custom handmade gifts',
    'personalized handmade gifts',
    'customized handmade gifts',
    'customized gifts online India',
    'personalised gifts India',
    'personalized gifts online India',
    'custom gifts India',
    'gift shop online India',
    'handmade return gifts India',
    'handmade wedding gifts India',
    'personalized wedding gifts India',
    'customized wedding gifts online',
    'birthday gifts online India',
    'personalized birthday gifts India',
    'anniversary gifts online India',
    'personalized anniversary gifts India',
    'housewarming gifts India',
    'personalized housewarming gifts',
    'bulk return gifts India',
    'handcrafted keepsakes India',
    'artisan crafted gifts India',
    'handcrafted personalized items',
    'unique handmade gifts online',
    'custom gift shop near me',

    // Price and quality related
    'affordable handmade gifts India',
    'premium customized frames online',
    'best quality personalized gifts',
    'cheap customized keychains India',
    'luxury handmade gift items',
    'budget friendly personalized gifts',

    // Material specific
    'wooden photo frames customized',
    'acrylic nameplate designs',
    'handmade craft frames',
    'handmade tabletop frames',
    'custom devotional frames India',
    'resin fridge magnets handmade',
    'metal keychains personalized',
    'wooden handmade gifts India',

    // Bulk order related
    'bulk order customized gifts',
    'wholesale handmade return gifts',
    'bulk wedding return gifts India',
    'corporate gifting handmade items',
    'bulk personalized keychains',

    // Trending searches
    'trending gift ideas 2026',
    'viral handmade gifts India',
    'Instagram worthy personalized gifts',
    'aesthetic handmade frames',
    'boho style customized gifts'
  ],
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
        alt: 'Kalangan Handmade logo for handmade gifts and customized frames',
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
  other: {
    'application-name': 'Kalangan Handmade',
    'apple-mobile-web-app-title': 'Kalangan Handmade',
    'business-name': 'Kalangan Handmade',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:country_name': 'India',
    'product:category': 'Handmade gifts, handmade craft frames, customized frames, table top frames',
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
    "image": "https://kalanganhandmade.in/logo.png",
    "@id": "https://kalanganhandmade.in",
    "url": "https://kalanganhandmade.in",
    "telephone": "+919833291030",
    "email": "kalanganhandmade@gmail.com",
    "priceRange": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai",
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
          "name": "Wedding Frames",
          "description": "Handmade customized wedding frames for couples",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Nameplates",
          "description": "Personalized nameplates for home and office",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Birthday Gifts",
          "description": "Customized handmade birthday gift items",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Customized Frames",
          "description": "Personalized photo frames with names and designs",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Table Top Frames",
          "description": "Handmade table top frames and devotional table top gifts",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Fridge Magnets",
          "description": "Handcrafted customized fridge magnets",
          "url": "https://kalanganhandmade.in/products"
        },
        {
          "@type": "OfferCatalog",
          "name": "Keychains",
          "description": "Personalized keychains for all occasions",
          "url": "https://kalanganhandmade.in/products"
        }
      ]
    }
  };

  const aiBrandJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kalanganhandmade.in/#website",
        "url": "https://kalanganhandmade.in",
        "name": "Kalangan Handmade",
        "alternateName": ["Kalangan", "कलांगण"],
        "description": "Official website of Kalangan Handmade, a handmade and customized gift business in Mumbai.",
        "publisher": {
          "@id": "https://kalanganhandmade.in/#business"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": ["LocalBusiness", "Store", "Organization"],
        "@id": "https://kalanganhandmade.in/#business",
        "name": "Kalangan Handmade",
        "legalName": "Kalangan Handmade",
        "alternateName": ["Kalangan", "कलांगण"],
        "description": "Kalangan Handmade is a Mumbai-based handmade gift business offering wedding frames, customized nameplates, birthday gifts, personalized photo frames, fridge magnets, keychains and return gifts.",
        "image": "https://kalanganhandmade.in/logo.png",
        "logo": "https://kalanganhandmade.in/logo.png",
        "url": "https://kalanganhandmade.in",
        "telephone": "+919833291030",
        "email": "kalanganhandmade@gmail.com",
        "priceRange": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mumbai",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "421301",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "handmade gifts",
          "customized wedding frames",
          "personalized nameplates",
          "birthday gifts",
          "photo frames",
          "table top frames",
          "handmade craft frames",
          "devotional table top gifts",
          "fridge magnets",
          "keychains",
          "return gifts",
          "customized gifts in India"
        ],
        "sameAs": [
          "https://www.instagram.com/__kalangan_?igsh=cjF6dzJnODlhcjlm"
        ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiBrandJsonLd) }}
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
