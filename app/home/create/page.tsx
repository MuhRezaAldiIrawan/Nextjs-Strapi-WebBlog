import { Suspense } from "react"
import { BreadcrumbsSkeleton } from "@/app/ui/components/skeletons"
import Breadcrumbs from "@/app/ui/components/breadcrumbs"
import CreateForm from "@/app/ui/components/create-form"
import { fetchGenres } from "@/app/api/genre"
import { fetchAuthors } from "@/app/api/author"



export default async function Page() {

    const getGenres = await fetchGenres();
    const getAuhtors = await fetchAuthors();

    console.log(getAuhtors)

    return (

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
            <CreateForm getGenres={getGenres} getAuthors={getAuhtors}/>
        </main>



    )
}