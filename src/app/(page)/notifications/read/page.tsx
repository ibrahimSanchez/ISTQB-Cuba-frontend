'use client'

import { useContext, useEffect, useState } from 'react';
import { NotificationUI } from '@/components';
import { NotificationsContext } from '@/context';
import { Notification } from '@/interfaces';



export default function Notifications() {


  const [notificationsRead, setNotificationRead] = useState<Notification[]>([]);


  const {
    notifications,
    loadNotificationData,
    setLoadNotificationData
  } = useContext(NotificationsContext);


  useEffect(() => {

    const data = notifications.filter((notification: any) =>
      notification.view === true
    );

    setNotificationRead(data);

  }, [notifications, loadNotificationData]);

  return (
    <div>

      {/* Listado de notificaciones */}
      {
        notificationsRead.length > 0 ? (
          <div className="space-y-4">
            {notificationsRead.map((notification) => (
              <NotificationUI
                key={notification.uid}
                notification={notification}
                loadNotificationData={loadNotificationData}
                setLoadNotificationData={setLoadNotificationData}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No hay notificaciones.</p>
        )
      }

    </div >
  )
}
