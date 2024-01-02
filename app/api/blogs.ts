
import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
import { flattenAttributes } from "../lib/utils";


const STRAPI_URL = process.env.STRAPI_URL;


//** fetching data blog **//
const ITEMS_PER_PAGE = 3;
export async function getDataBlog(query: string, currentPage: number) {
    noStore();

    const queryObject = qs.stringify({
        sort: ["date:asc"],
        populate:{
            images: {
                fields: ["url"],
            },
            genres: {
                fields: ["id", "title"],
            },
            author: {
                populate: {
                    image: {
                        fields: ["url"],
                    },
                }
            }
        },

        pagination: {
            pageSize: ITEMS_PER_PAGE,
            page: currentPage,
        },
        filters: {
            $or: [
                {
                    title: {
                        $contains: query,
                    },
                },
                {
                    genres: {
                        title: {
                            $contains: query,
                        },
                    },
                },
                {
                    author: {
                        name: {
                            $contains: query,
                        },
                    },
                }
            ],
        },
        // populate: ["genres", "images"]
    });

    try {
        const response = await fetch(STRAPI_URL + "/api/blogs?" + queryObject, {
            cache: "no-store",
        });
        const data = await response.json();
        console.log(data);
        const flattened = flattenAttributes(data.data);
        return { data: flattened, meta: data.meta };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch Blog.");
    }
}

export async function fetchGenres() {

    const query = qs.stringify({
        populate: {
            fields: ["id", "title"],
        },
    });
    try {
        const data = await fetch(STRAPI_URL + "/api/genres?" + query);
        const customers = await data.json();
        const flatten = flattenAttributes(customers.data);
        // console.log(flatten);
        return flatten;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all customers.");
    }
}