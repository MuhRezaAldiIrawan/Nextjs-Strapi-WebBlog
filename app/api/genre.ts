import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
import { flattenAttributes } from "../lib/utils";


const STRAPI_URL = process.env.STRAPI_URL;


const ITEMS_LATEST = 3;
export async function fetchGenres() {
    noStore();
    const query = qs.stringify({
        populate: {
            fields: ["id", "title"],
        },
    });
    try {
        const data = await fetch(STRAPI_URL + "/api/genres?" + query, {
            cache: "no-store",
        });
        const customers = await data.json();
        const flatten = flattenAttributes(customers.data);
        return flatten;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all customers.");
    }
}