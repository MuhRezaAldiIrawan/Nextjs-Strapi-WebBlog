import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
            <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                    <Image src="/images/widgets/sm-3.jpg" alt="" className="max-w-full h-auto rounded-xl" width={500} height={500} />
                </div>
                <div className="col-span-12 sm:col-span-6  md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                    <div className=" h-full flex flex-col p-3">
                        <div className="w-full block">
                            <span className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-2 inline-block mb-3">Helth</span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">23 Aug 2023</span>
                        </div>
                        <a href="#" className="text-[20px] md:text-3xl lg:text-3xl xl:text-[32px] leading-[30px] mb-5 md:mb-0 font-spectral font-semibold  text-gray-800 dark:text-slate-200 block">
                            This is a best Blogs card for your business template.
                        </a>
                        <div className="flex flex-wrap justify-between mt-auto">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded">
                                    <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="assets/images/users/avatar-1.jpg" alt="logo" />
                                </div>
                                <div className="ml-2">
                                    <a className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline"><h5 className=" font-medium text-sm">Fitbit Incorporation</h5></a>
                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">San Diego, California</p>
                                </div>
                            </div>
                            <a href="" className="block text-slate-500 dark:text-slate-400 hover:text-slate-600 underline decoration-1 decoration-dashed underline-offset-4  decoration-primary-500 font-medium  focus:outline-none self-center">Read More <i data-lucide="arrow-right" className="self-center inline-block ms-1 h-4 w-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}