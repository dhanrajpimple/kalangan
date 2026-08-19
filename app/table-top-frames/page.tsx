import CategoryLanding, { categoryMetadata } from '@/components/CategoryLanding';
import { categoryPages } from '@/config/categoryPages';
export const metadata = categoryMetadata(categoryPages.tableTop);
export default function Page() { return <CategoryLanding category={categoryPages.tableTop} />; }
