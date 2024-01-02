import Navbar from "../ui/navbar"
import Hero from "../ui/hero"
import Tags from "../ui/tags"
import RelatedPost from "../ui/relatedpost"
import Content from "../ui/content"
import { getDataBlog } from "../api/blogs"

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

    const { data: blogs, meta } = await getDataBlog(query, currentPage);

    // console.log(blogs, meta);

    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <div className="relative w-full py-[70px]">
                    <div className="container z-1">
                        <Hero />
                        <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                            <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-8 xl:col-span-9 ">
                                {/* <CreateBlogButton /> */}
                                <Tags />
                                <Content blogs={blogs} currentPage={currentPage}/>
                                {/* Content start */}
                            </div>
                            <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-4 xl:col-span-3 ">
                                <RelatedPost />
                                <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                                    {/* content second */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}