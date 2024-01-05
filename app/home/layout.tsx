import Navbar from "../ui/navbar"
import Hero from "../ui/hero"
import Tags from "../ui/tags"
import RelatedPost from "../ui/relatedpost"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Navbar />
                <div className="flex flex-col">
                    <div className="relative w-full py-[70px]">
                        <div className="container z-1">
                            <Hero />
                          
                            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
