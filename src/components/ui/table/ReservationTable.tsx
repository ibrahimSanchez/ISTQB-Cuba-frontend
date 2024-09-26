"use client";

import { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { FaCheckCircle } from "react-icons/fa";
import { Reservation, DataModal, User, Certification } from '@/interfaces';
import { deleteArrayReservation, deleteReservation, putReservation } from '@/api';
import { ModalAnswer, ModalOption } from '@/components';
import Link from 'next/link';
import { IconButton, Tooltip } from '@mui/material';



interface Props {
    reservations: Reservation[];
    users: User[];
    certifications: Certification[];
    setLoadReservationData: Function;
    loadReservationData: boolean;
}




export const ReservationTable = ({
    reservations,
    loadReservationData,
    setLoadReservationData,
    users,
    certifications
}: Props) => {


    const [selectedReservations, setSelectedReservations] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        setSelectedReservations(prev =>
            prev.includes(id) ? prev.filter(reservationId => reservationId !== id) : [...prev, id]
        );
    };

    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la reservación?');
    const [reservationIdSelected, setReservationIdSelected] = useState('');

    const toggleModalOption = (id: any) => {
        setReservationIdSelected(id);
        setModalOptionOpen(!isModalOptionOpen);
    };


    // modal Answer
    const [isRedirect, setIsRedirect] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [dataModal, setDataModal] = useState<DataModal>({
        title: 'Título del Modal',
        text: 'Este es el contenido del modal.'
    });

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };



    const actionDeleteReservation = async () => {

        if (selectedReservations.length === 0) {
            try {
                const res = await deleteReservation(reservationIdSelected);
                // console.log(res)

                const msgModal: DataModal = {
                    title: 'Eliminar reservación',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();

                setLoadReservationData(!loadReservationData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar reservación',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                // console.log(error.response.data.msg);
            }
        } else {
            try {
                const res = await deleteArrayReservation(selectedReservations);
                console.log(res)

                const msgModal: DataModal = {
                    title: 'Eliminar reservaciones',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                setSelectedReservations([]);
                setLoadReservationData(!loadReservationData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar reservaciones',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                // console.log(error.response.data.msg);
            }
        }

    }


    const approvedReservation = async (id: string) => {
        try {
            const res = await putReservation(id, { approved: true });
            // console.log(res)
            const msgModal: DataModal = {
                title: 'Aceptar reservación',
                text: 'Reservación aceptada'
            }
            setDataModal(msgModal)
            toggleModal();

            setLoadReservationData(!loadReservationData);

        } catch (error: any) {
            // console.log(error)
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Aceptar reservación',
                text: error.response.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
            // console.log(error.response.data.msg);
        }
    }



    return (
        <>

            {/* Modal option*/}
            < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDeleteReservation}
            />

            {/* Modal */}
            <ModalAnswer
                isOpen={isModalOpen}
                onClose={toggleModal}
                isError={isError}
                dataModal={dataModal}
                redirect={setIsRedirect}
            />
            <div className="overflow-x-auto max-h-80">

                <table className="border border-slate-500 min-w-full bg-transparent border-collapse">
                    <thead className='bg-[--primary] text-white uppercase text-sm'>
                        <tr>
                            <th className="p-4 border border-slate-600 text-start">
                                <input
                                    type="checkbox"
                                    onChange={() => {
                                        if (selectedReservations.length === reservations.length) {
                                            setSelectedReservations([]);
                                        } else {
                                            setSelectedReservations(reservations.map(({ uid }) => uid));
                                        }
                                    }}
                                />
                            </th>
                            <th className="p-4 border border-slate-600 text-start">Usuario</th>
                            <th className="p-4 border border-slate-600 text-start">Certificacion</th>
                            <th className="p-4 border border-slate-600 text-start">Estado</th>
                            <th className="p-4 border border-slate-600 text-start">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-[--text_color]">
                                    No hay reservaciones disponibles
                                </td>
                            </tr>
                        ) : (
                            reservations.map(({ uid, approved, certificationId, userId }) => (
                                <tr key={uid} className='text-[--text_color]'>
                                    <td className="p-4 border border-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={selectedReservations.includes(uid)}
                                            onChange={() => handleSelect(uid)}
                                        />
                                    </td>
                                    <td className="p-4 border border-slate-700">{users.find((user) => user.uid === userId)?.email}</td>
                                    <td className="p-4 border border-slate-700">
                                        <Link href={`/certification/${certificationId}`} >
                                            {certifications.find((certification) => certification.uid === certificationId)?.name}
                                        </Link>
                                    </td>
                                    <td className="p-4 border border-slate-700">{approved ? 'Aprobada' : 'Pendiente'}</td>
                                    <td className="p-4 border border-slate-700">
                                       
                                        <Tooltip title="Aprobar">
                                            <IconButton
                                                disabled={approved}
                                                className='text-[--primary] hover:text-[--secondary] mr-5'
                                                onClick={() => approvedReservation(uid)}
                                            >
                                                <FaCheckCircle size={20} />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Eliminar">
                                            <IconButton>
                                                <button
                                                    className='text-red-500 hover:text-red-700 mr-5'
                                                    onClick={() => toggleModalOption(uid || '')}
                                                >
                                                    <IoTrash size={20} />
                                                </button>
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-between mt-6'>
                <button
                    disabled={selectedReservations.length === 0 ? true : false}
                    onClick={() => toggleModalOption(selectedReservations)}
                    className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md'

                >
                    Eliminar marcados
                </button>
            </div>

        </>
    );
};