import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ProductNotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-[#8B0000]">Product Not Found</h1>
                    <p className="text-gray-600">This product may have been removed or the URL may be incorrect.</p>
                    <Link
                        href="/products"
                        className="inline-block mt-4 px-6 py-3 rounded-full bg-[#8B0000] text-white font-bold hover:bg-[#A52A2A] transition-colors"
                    >
                        Browse All Products
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
