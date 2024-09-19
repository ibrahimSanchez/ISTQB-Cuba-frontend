'use client';

import { useState } from 'react';
import { Notification } from '@/interfaces';
import { IoTrash } from 'react-icons/io5';
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import { deleteNotification, putNotification } from '@/api';
import { ModalOption } from '@/components';
import { IconButton, Tooltip } from '@mui/material';


interface Props {
    notification: Notification;
    setLoadNotificationData: Function;
    loadNotificationData: boolean;
}




export const NotificationUI = ({ notification, loadNotificationData, setLoadNotificationData }: Props) => {

    const { theme, message, view, date, uid } = notification;
    const [hovered, setHovered] = useState(false);



    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliminar la notificación?');
    const toggleModalOption = () => {
        setModalOptionOpen(!isModalOptionOpen);
    };

    const actionDeleteNotification = async () => {
        try {
            const res = await deleteNotification(uid);
            // console.log(res)
            setLoadNotificationData(!loadNotificationData);

        } catch (error: any) {
            console.log(error)
        }
    }

    const viewNotification = async (isView: boolean) => {
        try {
            const res = await putNotification(uid, isView);
            // console.log(res)
            setLoadNotificationData(!loadNotificationData);

        } catch (error: any) {
            console.log(error)
        }
    }

    return (

        <>
            {/* Modal option*/}
            < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDeleteNotification}
            />

            <div
                className={`relative flex justify-between items-center ${view ? 'bg-[#1b1d1f]' : 'bg-[#111416]'} border border-[#0e2c68] rounded shadow-md p-3 mb-2 transition-shadow duration-300 ease-in-out ${hovered ? 'shadow-sm shadow-[#0e2c68]' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="flex-1">
                    <h3 className="text-[#1d8bd2] font-semibold inline">{theme}</h3>
                    <span className="text-[#527186] text-sm mx-10 inline">{message}</span>
                </div>
                {!hovered ? (
                    <span className="text-[#527186] text-sm transition-all duration-300 ">{date}</span>
                ) : (
                    <div className="absolute right-3 flex space-x-2 transition duration-300 ">
                        <Tooltip title="Borrar">
                            <IconButton>
                                <button
                                    className="text-gray-500 hover:text-blue-500 text-xs"
                                    onClick={() => toggleModalOption()}
                                >
                                    <IoTrash
                                        className='bg-red-800 hover:bg-red-900 mr-2 text-white p-2 rounded-md flex'
                                        size={30}
                                    />

                                </button>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Sin leer">
                            <IconButton>
                                <button
                                    className="text-gray-500 hover:text-blue-500 text-xs"
                                    onClick={() => viewNotification(false)}
                                    disabled={!view}
                                >

                                    <FaEnvelope
                                        className='bg-blue-800 hover:bg-blue-900 mr-2 text-white p-2 rounded-md flex'
                                        size={30}
                                    />
                                </button>
                            </IconButton>
                        </Tooltip>


                        <Tooltip title="Leída">
                            <IconButton>
                                <button
                                    className="text-gray-500 hover:text-blue-500 text-xs"
                                    onClick={() => viewNotification(true)}
                                    disabled={view}
                                >
                                    <FaEnvelopeOpen
                                        className='bg-blue-800 hover:bg-blue-900 mr-2 text-white p-2 rounded-md flex'
                                        size={30}
                                    />
                                </button>
                            </IconButton>
                        </Tooltip>

                    </div>
                )}
            </div>
        </>
    );
};

