import { NotificationContent } from "./content";
import { auth } from '@/auth';
import { fetchAllNotifcation } from "@/src/actions/notifcation.action";


export default async function Page() {
    const session = await auth()
    const initalNotifications = await fetchAllNotifcation(session?.user?.id ?? "");
    console.log("initalNotifications: " + initalNotifications);
    return (
        <NotificationContent intialNotification={initalNotifications} />

    )
}