import {DetailSkeleton,BreadcrumbsSkeleton} from '@/app/ui/components/skeletons'

export default function Loading() {
    return (
        <>
            <BreadcrumbsSkeleton />
            <DetailSkeleton />
        </>
    )
}