import { posts } from "@repo/db/data"
import { parse } from "marked";
import { PostImage } from "@/components/post/PostImage";

// This runs at build time
export async function generateStaticParams() {
    return posts
        .filter(post => post.active)
        .map((post) => ({
            urlid: post.urlId,
        }));
}

// This becomes a static page
export default function Page({ params }: { params: { urlid: string } }) {
    const post = posts.find((post) => post.urlId === params.urlid);

    if (!post) {
        return <div>Post not found - Do not modify URL</div>;
    }
   
    return (
        <div>
            <h1 className="post-title">{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: parse(post.content)}} /> 
            <PostImage post={post} />
        </div>
    );
}