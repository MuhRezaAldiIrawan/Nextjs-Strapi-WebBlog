const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ContentSkeleton() {
    return (
        <div  className={`${shimmer} bg-white dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl shadow-lg w-full relative p-4 mt-8`}>
            <div>Loading Content .........</div>
        </div>
    );
};


// export function HomeSkeleton() {
//     return (
//         <div>Loading ......</div>
//     )
// }