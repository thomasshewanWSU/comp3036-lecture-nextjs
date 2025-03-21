'use client'
import { posts } from "@repo/db/data"
import { parse } from "marked";
import {PostImage} from "@/components/post/PostImage";
import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const urlId = params.urlid as string;
    const post = posts.find((post) => { return post.urlId === urlId})

    if (post == null) {
        return <div>Post not found - Do not modify URL</div>;
    }
   
    return (
        <div>
            <h1 className="post-title">{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: parse(post.content)}} /> 
            <PostImage post={post} />
        </div>
        // Using dangerouslySetInnerHTML to prevent attacks??
    );

}