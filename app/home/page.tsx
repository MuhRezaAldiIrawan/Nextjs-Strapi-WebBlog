// import Navbar from "../ui/navbar"
// import Hero from "../ui/hero"
import Tags from "../ui/tags"
import RelatedPost from "../ui/relatedpost"
import Content from "../ui/latestContent"
import RelatedContent from "../ui/relatedContent"
import { getLatestBlog, getRelatedBlog } from "../api/blogs"

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

    // console.log(relatedBlogs);

    return (
        <>
            {/* <Navbar /> */}
            <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-8 xl:col-span-9 ">
                    {/* <CreateBlogButton /> */}
                    <Tags />
                    <Content blogs={blogs} currentPage={currentPage} />
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
