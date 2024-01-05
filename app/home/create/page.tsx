import { Suspense } from "react"
import { BreadcrumbsSkeleton } from "@/app/ui/components/skeletons"
import Breadcrumbs from "@/app/ui/components/breadcrumbs"
import CreateForm from "@/app/ui/components/create-form"

export default function Page() {
    return (
        <>

            <Suspense fallback={<BreadcrumbsSkeleton />}>
                <main>
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: "Home", href: "/home" },
                            {
                                label: "Create Blog",
                                href: `/home/create`,
                                active: true,
                            },
                        ]}
                    />
                </main>
            </Suspense>

            <CreateForm />
        </>

    )
}