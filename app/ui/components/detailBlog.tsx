import { fetchBlogById } from "@/app/api/blogs";
import Image from "next/image";

export default async function BlogDetail(
    {
        blogs
    }: {
        blogs: any;
    }
) {

    const IMAGE_URL = process.env.IMAGE_URL;

   
    return (
        <>
            <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                    <Image src={IMAGE_URL + blogs.images.url} width={500} height={500} style={{ height: 250 }} alt="blog images" className="max-w-full h-auto rounded-xl" />
                </div>
                <div className="col-span-12 sm:col-span-6  md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                    <div className=" h-full flex flex-col p-3">
                        <div className="w-full block">
                            {blogs.genres?.map((genre: any, index: number) => (
                                <span key={genre.id} className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-3 inline-block mb-3"  style={{ marginRight: index < blogs.genres.length - 1 ? '8px' : '0px' }}>
                                    {genre.title}
                                </span>
                            ))}
                            <span className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">{blogs.date}</span>
                        </div>
                        <a href="#" className="text-[20px] md:text-3xl lg:text-3xl xl:text-[32px] leading-[30px] mb-5 md:mb-0 font-spectral font-semibold  text-gray-800 dark:text-slate-200 block">
                            {blogs.title}.
                        </a>
                        <div className="flex flex-wrap justify-between mt-auto">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded">
                                    <Image className="w-full h-full overflow-hidden object-cover rounded object-center" src={IMAGE_URL + blogs.author.image.url} alt={blogs.author.name} width={500} height={500} />
                                </div>
                                <div className="ml-2">
                                    <a className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline"><h5 className=" font-medium text-sm">{blogs.author.name}</h5></a>
                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">{blogs.author.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl  w-full relative p-4 mb-4">
                <p className="mt-3 text-gray-500 dark:text-gray-400">{blogs.content}</p>
            </div>
        </>
    )
}