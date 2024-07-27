'use client'

import React, { useState } from 'react';



export default function Notifications() {


  // Esto se optiene del backend
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Notificación 1' },
    { id: 2, message: 'Notificación 2' },
    { id: 3, message: 'Notificación 3' },
  ]);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const deleteNotification = (notification) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== notification.id)
    );
  };

  const deleteSelectedNotifications = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => !selectedNotifications.includes(n))
    );
    setSelectedNotifications([]);
  };

  const selectAllNotifications = () => {
    setSelectedNotifications([...notifications]);
  };



  return (
    <div className="mt-28 sm:px-14 mb-32">

      < h1 className="title mb-2" > Notificaciones</ h1>
      {/* line separator */}
      < div className="w-full h-1 bg-blue-950 mb-14" ></ div>

      {/* Listado de notificaciones */}
      {
        notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between hover:bg-[#3a3a3a] p-3 rounded transition-all"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification)}
                    onChange={() => {
                      if (selectedNotifications.includes(notification)) {
                        setSelectedNotifications((prevSelectedNotifications) =>
                          prevSelectedNotifications.filter(
                            (n) => n.id !== notification.id
                          )
                        );
                      } else {
                        setSelectedNotifications((prevSelectedNotifications) => [
                          ...prevSelectedNotifications,
                          notification,
                        ]);
                      }
                    }}
                    className="mr-4"
                  />
                  <span>{notification.message}</span>
                </div>
                <button
                  onClick={() => deleteNotification(notification)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay notificaciones.</p>
        )
      }

      {/* Acciones */}
      <div className="flex justify-between mt-14">
        <button
          onClick={selectAllNotifications}
          className="bg-blue-950 hover:bg-white text-white hover:text-blue-950 border-2 border-blue-950 py-2 px-4 rounded-lg transition-all"
        >
          Seleccionar todas
        </button>
        <button
          onClick={deleteSelectedNotifications}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all"
        >
          Eliminar seleccionadas
        </button>
      </div>


    </div >
  )
}
