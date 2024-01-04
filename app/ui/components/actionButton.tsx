import Link from "next/link";

export function Readmore({ id }: { id: string }) {
    return(
        <Link href={`/home/${id}/detail`} className="block text-slate-500 dark:text-slate-400 hover:text-slate-600 underline decoration-1 decoration-dashed underline-offset-4  decoration-primary-500 font-medium  focus:outline-none self-center">
            Read More <i data-lucide="arrow-right" className="self-center inline-block ms-1 h-4 w-4"></i>
        </Link>
    )
}

// export function AddBlog() {
//     return (
        
//     )
// }