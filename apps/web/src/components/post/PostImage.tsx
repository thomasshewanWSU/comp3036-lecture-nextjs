import Image from "next/image";
import { Post } from "@repo/db/data";
import { useEffect, useState } from "react";

export function PostImage({ post }: { post: Post }) {
    const [imageUrl, setImageUrl] = useState<string>(post.imageUrl || '/placeHolder.webp');

    useEffect(() => {
        // Only fetch a random image if post.imageUrl is not available
        if (!post.imageUrl && imageUrl === '/placeHolder.webp') {
            const fetchRandomImage = async () => {
                try {
                    const req = await fetch("https://dog.ceo/api/breeds/image/random");
                    const data = await req.json();
                    setImageUrl(data.message);  // Set the fetched image URL
                } catch (error) {
                    console.error('Error fetching random dog image:', error);
                }
            };

            fetchRandomImage();
        }
    }, [post.imageUrl, imageUrl]); // Only run the effect if the imageUrl is empty

    return (
        <Image 
            src={imageUrl || '/placeHolder.webp'} 
            alt={post.title} 
            width={300} 
            height={400} 
            style={{ 
                objectFit: 'cover',
                width: 'auto', 
                height: 'auto'
            }}
            priority={true}
        />
    );
}