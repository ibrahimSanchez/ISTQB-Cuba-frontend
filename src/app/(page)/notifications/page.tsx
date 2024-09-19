'use client'

import { useContext } from 'react';
import { NotificationUI } from '@/components';
import { NotificationsContext } from '@/context';


export default function Notifications() {

  const {
    notifications,
    loadNotificationData,
    setLoadNotificationData
  } = useContext(NotificationsContext);


  return (
    <div className='mb-16'>
      {/* Listado de notificaciones */}
      {
        notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification: any) => (
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
    </div>
  )
}
