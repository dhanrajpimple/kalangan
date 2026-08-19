import CategoryLanding, { categoryMetadata } from '@/components/CategoryLanding';
import { categoryPages } from '@/config/categoryPages';
export const metadata = categoryMetadata(categoryPages.wedding);
export default function Page() { return <CategoryLanding category={categoryPages.wedding} />; }
