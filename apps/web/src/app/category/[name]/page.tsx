import { posts } from "@repo/db/data"
import { toUrlPath } from "@repo/utils/url";
import Link from "next/link";

export default async function CategoryPage({params}: {params: {name: string}}) {
    const { name } = await params;
    const filteredPosts = posts.filter(post => toUrlPath(post.category) === name && post.active)

    return (
        <div>
            <h1>Category: {name}</h1>
            <ul>
                {filteredPosts.map((post) => (
                    <li key={post.id}>
                        <h2>
                            <Link href={`/post/${post.urlId}`}>{post.title}</Link>
                        </h2>
                        <div>{post.description}</div>
                        <div>{post.category}</div>
                        <div>{post.date.toLocaleDateString("en-AU")}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}