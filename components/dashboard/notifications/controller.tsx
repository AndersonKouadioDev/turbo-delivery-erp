import { NotificationVM } from "@/types/notification.model";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function useNotificationController() {
    const [notifications, setNotifications] = useState<NotificationVM[]>([]);
    const session = useSession();

    const token = session.data?.user.token;

    const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST ?? 'https://147.79.101.226:3009', {
        transports: ["polling"],
        extraHeaders: {
            Authorization: `Bearer ${token}`
        }
    });

    socket.on('/topic/notification', (data: any) => {
        const jsonData = data && JSON.parse(data) as NotificationVM;
        console.log({ jsonData: jsonData });
        setNotifications(jsonData)
    });

}


