
import Image from "next/image"
export default function Tags() {
    return (
        <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-8 xl:col-span-9  mt-5">
        <div
            className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
            <div className="flex justify-between">
                <p className="dark:text-slate-200">
                    <span className="font-medium border-b border-dashed border-pink-400">Latest Posts
                    </span>
                </p>
                <p className="dark:text-slate-200">
                    <span className="font-medium">Today </span>: 21 Augest 2023
                </p>
            </div>
        </div> 
    </div>
    )
}