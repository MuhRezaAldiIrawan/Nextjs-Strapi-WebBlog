import Link from "next/link";
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"

export function Readmore({ id }: { id: string }) {
    return (
        <Link href={`/home/${id}/detail`} className="block text-slate-500 dark:text-slate-400 hover:text-slate-600 underline decoration-1 decoration-dashed underline-offset-4  decoration-primary-500 font-medium  focus:outline-none self-center">
            Read More <i data-lucide="arrow-right" className="self-center inline-block ms-1 h-4 w-4"></i>
        </Link>
    )
}

export function AddBlog() {
    return (
        <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 ">
            <div className="col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-4 xl:col-span-3 ">
                <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg  p-3 mb-4 ">
                    <Link href="/home/create">
                        <Button>
                            <PlusIcon className="h-4 w-4" style={{ marginRight: "7px" }} /> Add Blog
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}