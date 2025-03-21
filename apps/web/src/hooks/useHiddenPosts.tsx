import { useState, useEffect } from 'react';

export function useHiddenPosts(category: string) {
    const [hiddenPosts, setHiddenPosts] = useState<Set<number>>(new Set());

    useEffect(() => {
        const savedHiddenPosts = localStorage.getItem(`hiddenPosts-${category}`);
        if (savedHiddenPosts) {
            setHiddenPosts(new Set(JSON.parse(savedHiddenPosts)));
        }
    }, [category]);

    useEffect(() => {
        localStorage.setItem(`hiddenPosts-${category}`, JSON.stringify([...hiddenPosts]));
    }, [hiddenPosts, category]);

    const hidePost = (postId: number) => {
        setHiddenPosts(prev => new Set([...prev, postId]));
    };

    const unhideAll = () => {
        setHiddenPosts(new Set());
    };

    return {
        hiddenPosts,
        hidePost,
        unhideAll
    };
}