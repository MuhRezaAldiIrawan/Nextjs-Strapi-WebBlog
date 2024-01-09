import Tags from "../../ui/tags"
import RelatedPost from "../../ui/relatedpost"
import Content from "../../ui/latestContent"
import RelatedContent from "../../ui/relatedContent"
import { getLatestBlog, getRelatedBlog } from "../../api/blogs"
import { Suspense } from 'react';
import { ContentSkeleton } from "@/app/ui/components/skeletons"
import {AddBlog} from "../../ui/components/actionButton"
import {fetchGenres} from "../../api/genre"



export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const { data: blogs, meta } = await getLatestBlog(query, currentPage);
    const { data: relatedBlogs } = await getRelatedBlog(query, currentPage);


    return (
        <>
            <AddBlog />
            <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-8 xl:col-span-9 ">
                    {/* <CreateBlogButton /> */}
                    <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-8 xl:col-span-9  mt-5">
                        <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
                            <Tags />
                        </div>
                    </div>
                    <Suspense fallback={<ContentSkeleton />}>
                        <Content blogs={blogs} currentPage={currentPage} />
                    </Suspense>
                    {/* Content start */}
                </div>
                <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-4 xl:col-span-3 ">
                    <RelatedPost />
                    <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                        <RelatedContent relatedBlogs={relatedBlogs} />
                    </div>
                </div>
            </div>
        </>

    )
}
