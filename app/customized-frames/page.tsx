import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Customized Photo Frames Online India | Personalized Frames',
  description: 'Order handmade customized photo frames with names, photos and messages for weddings, anniversaries, birthdays and special occasions. Made in Mumbai with Pan India delivery.',
  alternates: { canonical: '/customized-frames' },
  openGraph: {
    title: 'Customized Photo Frames Online India | Kalangan Handmade',
    description: 'Personalized handmade frames for weddings, anniversaries, birthdays, couples and home décor. Custom-made in Mumbai and delivered across India.',
    url: 'https://kalanganhandmade.in/customized-frames',
    type: 'website',
    images: [{ url: '/1.webp', width: 1200, height: 1200, alt: 'Handmade customized photo frame by Kalangan' }],
  },
};

const frameTypes = [
  ['Personalized photo frames', 'Turn favourite photographs into custom keepsakes with names, dates, short messages and a design suited to the occasion.'],
  ['Customized wedding frames', 'Celebrate a couple with a handmade wedding frame, engagement frame or wedding anniversary photo frame.'],
  ['Birthday photo frames', 'Create a personalized birthday gift for a friend, partner, parent or family member using photos and a meaningful message.'],
  ['Couple and anniversary frames', 'Mark a relationship milestone with custom couple frames, romantic photo frames and anniversary keepsakes.'],
  ['Pop-up frames', 'Choose a compact handmade pop-up frame in multiple sizes for desks, shelves, gifting and room décor.'],
  ['Home décor frame sets', 'Decorate a living room or gifting space with coordinated handmade frame sets and devotional tabletop designs.'],
];

const faqs = [
  ['Can I customize a frame with my own photo and name?', 'Yes. Share your photo, names, date and preferred message on WhatsApp. Kalangan will confirm the design and available customization before the order is finalized.'],
  ['Which occasions are customized frames suitable for?', 'Personalized frames work well for weddings, engagements, anniversaries, birthdays, housewarmings, baby celebrations, festivals and thoughtful everyday gifts.'],
  ['Do you deliver customized frames across India?', 'Kalangan is based in Mumbai, Maharashtra and offers Pan India delivery. Delivery time and charges depend on the destination and the chosen product.'],
  ['How do I order a personalized frame?', 'Browse the current collection, select a product and send the order through WhatsApp. Include your customization details and delivery address so the team can confirm the order.'],
  ['What frame sizes are available?', 'Available sizes vary by design. The current collection includes compact 4 × 4 inch and 5 × 7 inch options as well as larger 6 × 8 inch, 8 × 8 inch and décor frame sets.'],
];

export default function CustomizedFramesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://kalanganhandmade.in/customized-frames/#page',
        url: 'https://kalanganhandmade.in/customized-frames',
        name: 'Customized Photo Frames Online India',
        description: 'Handmade personalized photo frames for weddings, anniversaries, birthdays and special occasions with Pan India delivery.',
        isPartOf: { '@id': 'https://kalanganhandmade.in/#website' },
        about: ['customized photo frames', 'personalized frames', 'wedding frames', 'birthday frames', 'anniversary frames'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kalanganhandmade.in' },
          { '@type': 'ListItem', position: 2, name: 'Customized Frames', item: 'https://kalanganhandmade.in/customized-frames' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="flex-1">
        <section className="px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">Handmade in Mumbai · Pan India Delivery</p>
            <h1 className="text-4xl sm:text-6xl font-black text-[#8B0000] mb-6">Customized Photo Frames Online in India</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Create a personalized frame using your photos, names, dates and messages. Kalangan makes handmade custom photo frames for weddings, anniversaries, birthdays, couples, family celebrations and memorable gifts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="btn-primary rounded-full px-8 py-4 text-white font-bold">Browse Customized Frames</Link>
              <a href="https://wa.me/919833291030?text=Hi%2C%20I%20want%20to%20order%20a%20customized%20photo%20frame" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 bg-[#25D366] text-white font-bold inline-flex justify-center items-center gap-2"><MessageCircle size={20} />Ask About Customization</a>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-14 bg-white/55">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B0000] text-center mb-4">Personalized Frames for Every Occasion</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Explore custom frame ideas designed around the person, memory and moment you want to celebrate.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {frameTypes.map(([title, description]) => (
                <article key={title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#8B0000] mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#8B0000] mb-5">How Custom Frame Ordering Works</h2>
              <ol className="space-y-4 text-gray-600 leading-relaxed">
                <li><strong className="text-gray-800">1. Choose a frame:</strong> Browse the available handmade frames and select a style and size.</li>
                <li><strong className="text-gray-800">2. Share your details:</strong> Send photos, names, dates and your message through WhatsApp.</li>
                <li><strong className="text-gray-800">3. Confirm the order:</strong> Review availability, customization, price and delivery details.</li>
                <li><strong className="text-gray-800">4. Receive your keepsake:</strong> Your personalized frame is prepared and shipped to your address.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#8B0000] mb-5">Why Choose a Handmade Frame?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A custom-made frame combines a useful décor piece with a personal story. Unlike a generic gift, it can carry the recipient’s photograph, name, special date and a message chosen just for them.</p>
              <p className="text-gray-600 leading-relaxed">Kalangan’s collection includes affordable personalized photo frames, pop-up frames, wedding frame sets, tabletop frames and devotional handmade gifts for customers in Mumbai and across India.</p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 bg-white/55">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B0000] text-center mb-10">Customized Frame FAQs</h2>
            <div className="space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="glass-card rounded-2xl p-5 group">
                  <summary className="font-bold text-[#8B0000] cursor-pointer">{question}</summary>
                  <p className="text-gray-600 leading-relaxed mt-3">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
