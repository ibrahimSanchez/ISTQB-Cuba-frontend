'use client';

import { getNotificationsByUserId } from "@/api";
import { NotificationsContext } from "@/context";
import { Notification } from "@/interfaces";
import { IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosWallet, IoMdEye, IoMdEyeOff } from "react-icons/io";


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

      <div className='sm:flex justify-between items-center'>
        < h1 className="title mb-6" > Notificaciones</ h1>

        <div className="sm:flex space-x-4 mb-6 text-center">

          <Tooltip title="Todas">
            <IconButton>
              <Link href="/notifications" className={
                clsx(
                  "btnLink",
                  {
                    "btnLinkActive": pathname === '/notifications'
                  }
                )
              }>
                <IoIosWallet
                  size={23}
                  className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Vistas">
            <IconButton>
              <Link href='/notifications/read' className={
                clsx(
                  "btnLink",
                  {
                    "btnLinkActive": pathname === '/notifications/read'
                  }
                )
              }>
                <IoMdEye
                  size={23}
                  className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Sin ver">
            <IconButton>
              <Link href='/notifications/unread' className={
                clsx(
                  "btnLink",
                  {
                    "btnLinkActive": pathname === '/notifications/unread'
                  }
                )
              }>
                <IoMdEyeOff
                  size={23}
                  className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                />
              </Link>
            </IconButton>
          </Tooltip>

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
