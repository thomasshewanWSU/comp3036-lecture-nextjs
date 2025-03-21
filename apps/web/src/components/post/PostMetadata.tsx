import { Post } from "@repo/db/data";

export function PostMetadata({ post }: { post: Post }) {
    return (
        <>
            <div className="metadata" style={{ color: "blue"}}>
                <span className="tag">{post.tags}</span>
                <span className="category">{post.category}</span>
                <span className="date">{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div>{post.date.toLocaleDateString("en-AU")}</div>
        </>
    );
}