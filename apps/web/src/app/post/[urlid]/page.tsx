import { posts } from "@repo/db/data"
import { parse } from "marked";

export default async function Page({params}: {params: {urlid: string}}) {
    const { urlid } = await params;

    const post = posts.find((post) => { return post.urlId === urlid})

    if (post == null) {
        return <div>Post not found - Do not modify URL</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: parse(post.content)}} /> 
        </div>
        // Using dangerouslySetInnerHTML to prevent attacks??
    );

}