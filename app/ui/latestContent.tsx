import Image from "next/image";
import { Readmore } from "./components/actionButton";


export default function Content({
    blogs,
}: {
    currentPage: number;
    blogs: object[];
}) {

    const IMAGE_URL = process.env.IMAGE_URL;

    return (

        <div>
            {blogs?.map((blog: any) => (

                <div key={blog.id} className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mt-8">
                    <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mt-3">
                        <div className="col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                            {/* <h1>{blog.images.url}</h1> */}
                            
                            <Image width={500} height={500} alt="blog images" src={IMAGE_URL + blog.images.url} />
                        </div>
                        <div className="col-span-12 sm:col-span-6  md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                            <div className=" h-full flex flex-col p-3">
                                <div className="w-full block">
                                    <span className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-2 inline-block mb-3">{blog.genres[0].title}</span>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">{blog.date}</span>
                                </div>
                                <a href="#"
                                    className="text-[20px] md:text-3xl lg:text-3xl xl:text-[32px] leading-[30px] mb-5 md:mb-0 font-spectral font-semibold  text-gray-800 dark:text-slate-200 block">
                                    {blog.title}
                                </a>
                                <div className="flex flex-wrap justify-between mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded">
                                            <Image className="w-full h-full overflow-hidden object-cover rounded object-center" width={500} height={500} alt="blog images" src={IMAGE_URL + blog.author.image.url} />
                                        </div>
                                        <div className="ml-2">
                                            <a
                                                className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline">
                                                <h5 className=" font-medium text-sm">{blog.author.name}</h5>
                                            </a>
                                            <p
                                                className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                {blog.author.address}</p>
                                        </div>
                                    </div>
                                    <Readmore id={blog.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}