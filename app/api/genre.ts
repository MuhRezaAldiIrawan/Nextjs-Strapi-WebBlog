import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
import { flattenAttributes } from "../lib/utils";


const STRAPI_URL = process.env.STRAPI_URL;


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