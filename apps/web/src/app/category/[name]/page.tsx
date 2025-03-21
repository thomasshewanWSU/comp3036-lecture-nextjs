'use client';
import { posts } from "@repo/db/data"
import { toUrlPath } from "@repo/utils/url";
import { useParams } from 'next/navigation';
import { useHiddenPosts } from '@/hooks/useHiddenPosts';
import { PostList } from '@/components/post/PostList';
import { UnhideButton } from '@/components/ui/UnhideButton';

export default function CategoryPage() {
    const params = useParams();
    const name = params.name as string;
    const { hiddenPosts, hidePost, unhideAll } = useHiddenPosts(name);
    
    const filteredPosts = posts.filter(post => 
        toUrlPath(post.category) === name && 
        post.active && 
        !hiddenPosts.has(post.id)
    );

    return (
        <div>
            <h1>Category: {name}</h1>
            {hiddenPosts.size > 0 && (
                <UnhideButton 
                    count={hiddenPosts.size} 
                    onUnhide={unhideAll} 
                />
            )}
            <PostList 
                posts={filteredPosts}
                onHidePost={hidePost}
                showHideButton={true}
            />
        </div>
    );
}