import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCategories, getProductsByCategory } from '@/services/supabaseServer';

export type CategoryContent = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { title: string; text: string }[];
  occasions: string[];
  faqs: [string, string][];
};

export const categoryMetadata = (category: CategoryContent): Metadata => ({
  title: category.title,
  description: category.description,
  alternates: { canonical: `/${category.slug}` },
  openGraph: {
    title: `${category.title} | Kalangan Handmade`,
    description: category.description,
    url: `https://kalanganhandmade.in/${category.slug}`,
    type: 'website',
    images: [{ url: category.image, alt: category.imageAlt }],
  },
  twitter: { card: 'summary_large_image', title: category.title, description: category.description, images: [category.image] },
});

const categorySearchTerms: Record<string, string[]> = {
  'customized-frames': ['customized frame', 'custom frame', 'pop up frame', 'photo frame'],
  'table-top-frames': ['table top', 'tabletop'],
  'customized-nameplates': ['nameplate', 'name plate'],
  'wedding-gift-frames': ['wedding frame', 'gift frame', 'wedding'],
  'customized-magnets': ['magnet', 'fridge magnet'],
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export default async function CategoryLanding({ category }: { category: CategoryContent }) {
  const apiCategories = await getCategories();
  const terms = categorySearchTerms[category.slug] ?? [category.name];
  const matchedCategory = apiCategories.find(apiCategory => {
    const apiName = normalize(apiCategory.category_name);
    return terms.some(term => {
      const normalizedTerm = normalize(term);
      return apiName.includes(normalizedTerm) || normalizedTerm.includes(apiName);
    });
  });

  const apiProducts = matchedCategory
    ? await getProductsByCategory(matchedCategory.id, false)
    : [];
  const firstProductWithImage = apiProducts.find(product => Boolean(product.image_url));
  const heroImage = firstProductWithImage?.image_url || category.image;
  const heroAlt = firstProductWithImage
    ? `${firstProductWithImage.name} from ${category.name} by Kalangan Handmade`
    : category.imageAlt;
  const absoluteHeroImage = heroImage.startsWith('http')
    ? heroImage
    : `https://kalanganhandmade.in${heroImage}`;
  const url = `https://kalanganhandmade.in/${category.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', '@id': `${url}/#page`, url, name: category.title,
        description: category.description, isPartOf: { '@id': 'https://kalanganhandmade.in/#website' },
        primaryImageOfPage: { '@type': 'ImageObject', url: absoluteHeroImage, caption: heroAlt },
      },
      {
        '@type': 'FAQPage', mainEntity: category.faqs.map(([question, answer]) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kalanganhandmade.in' },
          { '@type': 'ListItem', position: 2, name: category.name, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="flex-1">
        <section className="px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">{category.eyebrow}</p>
              <h1 className="text-4xl sm:text-6xl font-black text-[#8B0000] mb-6">{category.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{category.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={matchedCategory ? `/products?category=${encodeURIComponent(matchedCategory.id)}` : '/products'} className="btn-primary rounded-full px-7 py-4 text-white font-bold text-center">Browse the Collection</Link>
                <a href={`https://wa.me/919833291030?text=${encodeURIComponent(`Hi, I want to order ${category.name.toLowerCase()}.`)}`} target="_blank" rel="noopener noreferrer" className="rounded-full px-7 py-4 bg-[#25D366] text-white font-bold inline-flex justify-center items-center gap-2"><MessageCircle size={20} />Customize on WhatsApp</a>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-4 aspect-square relative">
              <Image src={heroImage} alt={heroAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain rounded-2xl" priority />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 bg-white/55">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B0000] text-center mb-10">Explore {category.name}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {category.sections.map(section => <article key={section.title} className="glass-card rounded-2xl p-6"><h3 className="text-xl font-bold text-[#8B0000] mb-3">{section.title}</h3><p className="text-gray-600 leading-relaxed">{section.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div><h2 className="text-3xl font-bold text-[#8B0000] mb-5">Made for Meaningful Occasions</h2><p className="text-gray-600 leading-relaxed mb-5">Choose a design for the person and moment you want to celebrate. Customization availability varies by product and is confirmed before ordering.</p><ul className="grid grid-cols-2 gap-3">{category.occasions.map(item => <li key={item} className="glass-card rounded-xl px-4 py-3 text-sm text-gray-700">{item}</li>)}</ul></div>
            <div><h2 className="text-3xl font-bold text-[#8B0000] mb-5">Easy Custom Ordering</h2><ol className="space-y-4 text-gray-600"><li><strong className="text-gray-800">1.</strong> Browse available products and choose a design.</li><li><strong className="text-gray-800">2.</strong> Share names, photos, wording, quantity and delivery location.</li><li><strong className="text-gray-800">3.</strong> Confirm customization, price and expected delivery.</li><li><strong className="text-gray-800">4.</strong> Receive your handmade order anywhere service is available in India.</li></ol></div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 bg-white/55"><div className="max-w-4xl mx-auto"><h2 className="text-3xl sm:text-4xl font-bold text-[#8B0000] text-center mb-10">Frequently Asked Questions</h2><div className="space-y-4">{category.faqs.map(([question, answer]) => <details key={question} className="glass-card rounded-2xl p-5"><summary className="font-bold text-[#8B0000] cursor-pointer">{question}</summary><p className="text-gray-600 leading-relaxed mt-3">{answer}</p></details>)}</div></div></section>

        <nav aria-label="Related gift categories" className="px-4 sm:px-6 py-12"><div className="max-w-5xl mx-auto text-center"><h2 className="text-2xl font-bold text-[#8B0000] mb-6">Shop Related Handmade Gifts</h2><div className="flex flex-wrap justify-center gap-3">{[['Customized Frames','/customized-frames'],['Tabletop Frames','/table-top-frames'],['Nameplates','/customized-nameplates'],['Wedding & Gift Frames','/wedding-gift-frames'],['Customized Magnets','/customized-magnets']].filter(([, href]) => href !== `/${category.slug}`).map(([label, href]) => <Link key={href} href={href} className="rounded-full bg-white border border-[#D4AF37]/30 px-5 py-3 text-sm font-bold text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-colors">{label}</Link>)}</div></div></nav>
      </main>
      <Footer />
    </div>
  );
}
