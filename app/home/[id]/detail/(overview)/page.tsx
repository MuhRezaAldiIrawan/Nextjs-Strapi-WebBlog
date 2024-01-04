import { fetchBlogById } from "@/app/api/blogs";
import BlogDetail from "@/app/ui/components/detailBlog";
import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import Image from "next/image";
import { Suspense } from "react";
import { DetailSkeleton, BreadcrumbsSkeleton } from "@/app/ui/components/skeletons";

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;

    const blogs = await fetchBlogById(params.id);

    console.log(blogs);

    return (
        <>
            <Suspense fallback={<BreadcrumbsSkeleton />}>
                <main>
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: "home", href: "/home" },
                            {
                                label: "Detail Blog",
                                href: `/home/${id}/detail`,
                                active: true,
                            },
                        ]}
                    />
                </main>
            </Suspense>
            <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
                <Suspense fallback={<DetailSkeleton />}>
                    <BlogDetail blogs={blogs} />
                </Suspense>
            </div>
        </>
    )
}