'use client';

import { getNotificationsByUserId } from "@/api";
import { NotificationsContext } from "@/context";
import { Notification } from "@/interfaces";
import { IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {


  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loadNotificationData, setLoadNotificationData] = useState(false);

  const value = { notifications, loadNotificationData, setLoadNotificationData }

  const loadNotifications = async () => {

    try {
      const res = await getNotificationsByUserId();
      // console.log(res)
      setNotifications(res.data.notifications);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    loadNotifications();
  }, [loadNotificationData])



  const pathname = usePathname();

  return (
    <div className="mt-16 px-8 sm:px-14">


      <div className='sm:flex justify-between'>
        < h1 className="title mb-6" > Notificaciones</ h1>

        <div className="sm:flex space-x-4 mb-6 text-center">

          <Link href="/notifications" className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/notifications'
              }
            )
          }>
            Todas
          </Link>

          <Link href='/notifications/read' className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/notifications/read'
              }
            )
          }>
            Vistas
          </Link>

          <Link href='/notifications/unread' className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/notifications/unread'
              }
            )
          }>
            Sin ver
          </Link>
        </div>
      </div>


      {/* line separator */}
      < div className="w-full h-1 bg-blue-950 mb-14" ></ div>

      <NotificationsContext.Provider value={value}>
        <div>
          {children}
        </div>
      </NotificationsContext.Provider>



    </div>
  );
}
