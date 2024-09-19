'use client';

// import { Notification } from "@/interfaces";
import { createContext } from "react";



export const NotificationsContext = createContext<any>({
    notifications: [],
    loadNotificationData: true,
    setLoadNotificationData: function (value: boolean) {
        return value
     }
})
