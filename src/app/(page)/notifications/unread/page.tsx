'use client'

import { useContext, useEffect, useState } from 'react';
import { NotificationUI } from '@/components';
import { Notification } from '@/interfaces';
import { NotificationsContext } from '@/context';



export default function Notifications() {
  const [notificationsUnRead, setNotificationUnRead] = useState<Notification[]>([]);


  const {
    notifications,
    loadNotificationData,
    setLoadNotificationData
  } = useContext(NotificationsContext);


  useEffect(() => {

    const data = notifications.filter(notification =>
      notification.view === false
    );

    setNotificationUnRead(data);

  }, [notifications, loadNotificationData]);

  return (
    <div>

      {/* Listado de notificaciones */}
      {
        notificationsUnRead.length > 0 ? (
          <div className="space-y-4">
            {notificationsUnRead.map((notification) => (
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
