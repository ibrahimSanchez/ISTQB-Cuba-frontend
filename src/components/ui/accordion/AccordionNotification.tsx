'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoTrash } from 'react-icons/io5';
import { Notification } from '@/interfaces';
import { ModalOption } from '@/components';
import { useState } from 'react';
import { deleteNotification } from '@/api';


interface Props {
    notification: Notification;
    setLoadNotificationData: Function;
    loadNotificationData: boolean;
}



export const AccordionNotification = ({ notification, loadNotificationData, setLoadNotificationData }: Props) => {

    const { date, message, theme, view, userId, uid } = notification;

    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la notificación?');

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


    return (
        <div>


            {/* Modal option*/}
            < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDeleteNotification}
            />


            <Accordion className='bg-[#0e3148] text-white shadow shadow-white z-0'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='text-white' />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    {theme}
                </AccordionSummary>
                <AccordionDetails>
                    {message}
                </AccordionDetails>
                <AccordionActions>
                    <button
                        className='bg-red-800 hover:bg-red-900 mr-5 text-white p-2 rounded-md flex'
                        onClick={() => toggleModalOption()}
                    >
                        Eliminar
                        <IoTrash
                            size={20}
                            className='ml-2'
                        />
                    </button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
