"use client"

import { updateNotifcation } from "@/src/actions/notifcation.action";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export function useDetailNotificationController(id: string) {
    const {data} = useSession();

    const lireNotification = async() =>{
        try {
            await updateNotifcation({
                utilisateurId: data ? data.user?.id : "",
                notificationId: id
            })
        } catch (error) {}
    }

    useEffect(()=>{
        lireNotification()
    },[id]); 
}