import Image from "next/image"
export default function Navbar() {
    return (

        <div className="h-full w-full">
            <nav className="bg-white shadow block fixed right-0 left-0 z-10 py-4">
                <div className="mx-auto container px-6 py-0">
                    <div className="flex items-center justify-between">
                        <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-start sm:justify-start">
                            <div className="flex items-center">
                                <a href="index.html" className="logo">
                                    <span>
                                        <Image src="/images/logo-sm.png" alt="logo-small"
                                            className="logo-sm h-8 align-middle inline-block" width={35} height={40} />
                                    </span>
                                    <span className="self-center">
                                        <Image src="/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark inline-block dark:hidden ms-1 group-data-[sidebar=dark]:hidden" width={70} height={70} />
                                    </span>
                                </a>
                            </div>
                        </button>
                        <div className="flex">
                            <div className="ltr:me-2 ltr:md:me-4 rtl:me-0 rtl:ms-2 rtl:lg:me-0 rtl:md:ms-4">

                                <button id="toggle-theme" className="flex rounded-full md:me-0 relative">
                                    <span className="me-2">Light</span>
                                    <span data-lucide="moon" className="top-icon w-5 h-5 light "></span>
                                    <span data-lucide="sun" className="top-icon w-5 h-5 dark hidden"></span>
                                    <span className="ms-2">Dark</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}