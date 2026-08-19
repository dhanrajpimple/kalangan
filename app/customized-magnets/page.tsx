import CategoryLanding, { categoryMetadata } from '@/components/CategoryLanding';
import { categoryPages } from '@/config/categoryPages';
export const metadata = categoryMetadata(categoryPages.magnets);
export default function Page() { return <CategoryLanding category={categoryPages.magnets} />; }
