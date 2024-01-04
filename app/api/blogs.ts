
import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
import { flattenAttributes } from "../lib/utils";


const STRAPI_URL = process.env.STRAPI_URL;


//** fetching data blog **//
const ITEMS_LATEST = 3;
export async function getLatestBlog(query: string, currentPage: number) {
    noStore();

    const queryObject = qs.stringify({
        sort: ["date:desc"],
        populate: {
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
            pageSize: ITEMS_LATEST,
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
                        address: {
                            $contains: query,
                        }
                    },
                }
            ],
        },
        // populate: ["genres", "images"]
    });

    try {
        // console.log('Fetching revenue data...');
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        const response = await fetch(STRAPI_URL + "/api/blogs?" + queryObject, {
            cache: "no-store",
        });
        // console.log('Data fetch completed after 3 seconds.');
        const data = await response.json();
        console.log(data);
        const flattened = flattenAttributes(data.data);
        return { data: flattened, meta: data.meta };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch Blog.");
    }
}

const ITEMS_RELATED = 6;
export async function getRelatedBlog(query: string, currentPage: number) {
    noStore();

    const queryObject = qs.stringify({
        sort: ["date:asc"],
        populate: {
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
            pageSize: ITEMS_RELATED,
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
                        address: {
                            $contains: query,
                        }
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

export async function fetchBlogById(id: string) {

    noStore();
    
    const query = qs.stringify({
        populate: {
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
    });

    try {

        console.log('Fetching revenue data...');
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const data = await fetch(STRAPI_URL + "/api/blogs/" + id + "?" + query, {
            cache: "no-store",
        });

        console.log('Data fetch completed after 3 seconds.');

        const blog = await data.json();
        const flatten = flattenAttributes(blog.data);
        return flatten;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all customers.");
    }
}

