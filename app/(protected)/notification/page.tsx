
import { Suspense } from "react";

import { NotificationContent } from "./content";
import Loading from "@/app/loading";
import { auth } from '@/auth';
import { fetchAllNotifcation } from "@/src/actions/notifcation.action";

export default async function Page(){
    const session  = await auth()
   const initalNotifications = await fetchAllNotifcation(session?.user?.id ?? "");
    return(
        <Suspense fallback={<Loading />}>
            <NotificationContent intialNotification={initalNotifications}/>
        </Suspense>
    )
}