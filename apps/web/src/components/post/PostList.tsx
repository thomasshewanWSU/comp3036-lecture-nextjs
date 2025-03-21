import { Post } from "@repo/db/data";
import { PostCard } from "./PostCard";

interface PostListProps {
    posts: Post[];
    onHidePost?: (id: number) => void;
    showHideButton?: boolean;
}

export function PostList({ posts, onHidePost, showHideButton = true }: PostListProps) {
    if (posts.length === 0) {
        return <p>No posts found.</p>;
    }
    return (
        <ul>
            {posts.map((post) => (
                <PostCard 
                    key={post.id} 
                    post={post} 
                    onHide={onHidePost}
                    showHideButton={showHideButton}
                />
            ))}
        </ul>
    );
}