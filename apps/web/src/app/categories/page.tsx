import {posts} from "@repo/db/data"
import { categories } from "@/functions/categories";
import Link from "next/link";
import { toUrlPath } from "@repo/utils/url";

export default function Page() {
    const postcategories = categories(posts);
    console.log(postcategories);
    return (
        <div>
            <p>Total Categories: {postcategories.length}</p>
            <ul>
                {postcategories.map((category, index) => (
                    <li key={index}>
                        <Link href={`/category/${toUrlPath(category.name)}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}