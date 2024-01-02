export default function Hero () {
    return (
        <div
        className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4 justify-center">
        <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
            <div className=" w-full relative mb-10">
                <div className="flex-auto p-4">
                    <div className="text-center mt-10">
                        <h4
                            className="my-1 font-semibold text-[30px] md:text-[40px] dark:text-slate-200 mb-5 leading-12">
                            Blogs Section For Everyone</h4>
                        <h6 className="text-gray-500 dark:text-gray-400 text-lg font-medium">Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}