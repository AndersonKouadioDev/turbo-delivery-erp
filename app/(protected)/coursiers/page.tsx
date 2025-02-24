import Loading from "@/components/layouts/loading";
import { Suspense } from "react";
import { CouriserContent } from "./content";

export default async function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <CouriserContent />
        </Suspense>
    )
}