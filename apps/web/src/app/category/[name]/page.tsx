import { posts } from "@repo/db/data"
import { toUrlPath } from "@repo/utils/url";
import { CategoryContent } from '@/components/post/CategoryContent';

export async function generateStaticParams() {
    const categories = new Set(posts.map(post => toUrlPath(post.category)));
    return Array.from(categories).map((category) => ({
        name: category,
    }));
}

export default function CategoryPage({ params }: { params: { name: string } }) {
    return <CategoryContent name={params.name} />;
}