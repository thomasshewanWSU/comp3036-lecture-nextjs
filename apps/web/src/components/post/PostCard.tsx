import Link from "next/link";
import { Post } from "@repo/db/data";
import { PostMetadata } from "./PostMetadata";
import { PostImage } from "./PostImage";
import { HideButton } from '@/components/ui/HideButton';

interface PostCardProps {
    post: Post;
    onHide?: (id: number) => void;
    showHideButton?: boolean;
}

export function PostCard({ post, onHide, showHideButton = true }: PostCardProps) {
    return (
        <li key={post.id}>
            <h2>
                <Link href={`/post/${post.urlId}`}>{post.title}</Link>
            </h2>
            {showHideButton && onHide && (
                <HideButton onHide={() => onHide(post.id)} />
            )}
            <div>{post.description}</div>
            <div>{post.category}</div>
            <PostImage post={post} />
            <PostMetadata post={post} />
        </li>
    );
}