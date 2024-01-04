const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

import Image from 'next/image';
export function ContentSkeleton() {
    return (
            <div>Loading Content .........</div>
        // <div className={`${shimmer} bg-white dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl shadow-lg w-full relative p-4 mt-8`}>
        // </div>
    );
};


export function DetailSkeleton() {
    return (
        <>
            <div className={`${shimmer} bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4`}>
                <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                    <div className="w-full h-0 aspect-w-4 aspect-h-5 bg-gray-300 animate-pulse rounded-xl overflow-hidden" />
                    </div>
                    <div className="col-span-12 sm:col-span-6  md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                        <div className=" h-full flex flex-col p-3">
                            <div className="w-full block">
                                <span className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-2 inline-block mb-3">Genre</span>
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">date</span>
                            </div>
                            <a href="#" className="text-[20px] md:text-3xl lg:text-3xl xl:text-[32px] leading-[30px] mb-5 md:mb-0 font-spectral font-semibold  text-gray-800 dark:text-slate-200 block">
                                title blog
                            </a>
                            <div className="flex flex-wrap justify-between mt-10">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded">
                                        {/* image section */}
                                        <div className="box-border h-full w-full p-4 border-4 bg-slate-800"> </div>
                                    </div>
                                    <div className="ml-2">
                                        <a className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline"><h5 className=" font-medium text-sm">Author Name</h5></a>
                                        <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">Author Address</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl  w-full relative p-4 mb-4">
                    <p className="mt-3 text-gray-500 dark:text-gray-900 "></p>
                </div>
                {/* <div>Ini loading untuk Skeleton Detail Blog</div> */}
            </div>
        </>
    );
}

export function BreadcrumbsSkeleton() {
    return (
        <h1 className="text-3xl bg-slate-800 mb-8 h-6 w-24 rounded ">Loading Breadcrumbs ....</h1>
    )
}