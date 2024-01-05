import Image from 'next/image'
import Link from 'next/link'

export default function RelatedContent({
    relatedBlogs,
}: {

    relatedBlogs: object[];
}) {
    const IMAGE_URL = process.env.IMAGE_URL;

    return (
        <div className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-12 xl:col-span-12 ">
            {relatedBlogs?.map((blog: any) => (
                <div
                    key={blog.id} className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mt-3">
                    <div
                        className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                        <div
                            className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-4 xl:col-span-4 ">
                            <Image src={IMAGE_URL+blog.images.url} alt="image"
                                className="max-w-full h-auto rounded-xl" width={500} height={500} style={{height: 75}} />
                        </div>
                        <div
                            className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-8 xl:col-span-8 ">
                            <div className=" h-full flex flex-col p-3">
                                <div className="w-full block">
                                    <span
                                        className="text-[12px] bg-green-500/10 text-green-500 dark:text-green-600 rounded font-medium py-0 px-2 inline-block mb-3">{blog.genres[0].title}</span>
                                    <span
                                        className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">{blog.date}</span>
                                </div>
                                <Link href={`/home/${blog.id}/detail`}
                                    className="text-lg font-semibold  text-gray-600 dark:text-slate-200 block leading-5 truncate hover:underline hover:underline-offset-[4px]">
                                    {blog.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}