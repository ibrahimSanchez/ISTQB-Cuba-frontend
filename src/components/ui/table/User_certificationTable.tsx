"use client";

import { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { FaCheckCircle } from "react-icons/fa";
import { User_certification, DataModal, User, Certification } from '@/interfaces';
import { deleteArrayReservation, deleteArrayUser_certification, deleteReservation, deleteUser_certification, putReservation, putUser_certification } from '@/api';
import { ModalAnswer, ModalOption } from '@/components';
import Link from 'next/link';
import { IconButton, Tooltip } from '@mui/material';



interface Props {
    user_certifications: User_certification[];
    users: User[];
    certifications: Certification[];
    setLoadUser_certificationsData: Function;
    loadUser_certificationsData: boolean;
}




export const User_certificationTable = ({
    user_certifications,
    loadUser_certificationsData,
    setLoadUser_certificationsData,
    users,
    certifications
}: Props) => {


    const [selectedUser_certifications, setSelectedUser_certifications] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        setSelectedUser_certifications(prev =>
            prev.includes(id) ? prev.filter(user_certificationId => user_certificationId !== id) : [...prev, id]
        );
    };

    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la reservación?');
    const [user_certificationIdSelected, setUser_certificationIdSelected] = useState('');

    const toggleModalOption = (id: any) => {
        setUser_certificationIdSelected(id);
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

        if (selectedUser_certifications.length === 0) {
            try {
                const res = await deleteUser_certification(user_certificationIdSelected);
                // console.log(res)

                const msgModal: DataModal = {
                    title: 'Eliminar istoria de certificación',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();

                setLoadUser_certificationsData(!loadUser_certificationsData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar historia de certificación',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                // console.log(error.response.data.msg);
            }
        }
        else {
            try {
                const res = await deleteArrayUser_certification(selectedUser_certifications);
                // console.log(res)
                
                const msgModal: DataModal = {
                    title: 'Eliminar historias de certificación',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                setSelectedUser_certifications([]);
                setLoadUser_certificationsData(!loadUser_certificationsData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar historias de certificación',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                // console.log(error.response.data.msg);
            }
        }
    }


    const completedUser_certifications = async (id: string) => {
        try {
            const res = await putUser_certification(id, { completed: true });
            // console.log(res)
            const msgModal: DataModal = {
                title: 'Completar certificación',
                text: 'Certificación completada'
            }
            setDataModal(msgModal)
            toggleModal();

            setLoadUser_certificationsData(!loadUser_certificationsData);

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
                                        if (selectedUser_certifications.length === user_certifications.length) {
                                            setSelectedUser_certifications([]);
                                        } else {
                                            setSelectedUser_certifications(user_certifications.map(({ uid }) => uid));
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
                        {user_certifications.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-[--text_color]">
                                    No hay reservaciones disponibles
                                </td>
                            </tr>
                        ) : (
                            user_certifications.map(({ uid, completed, certificationId, userId }) => (
                                <tr key={uid} className='text-[--text_color]'>
                                    <td className="p-4 border border-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={selectedUser_certifications.includes(uid)}
                                            onChange={() => handleSelect(uid)}
                                        />
                                    </td>
                                    <td className="p-4 border border-slate-700">{users.find((user) => user.uid === userId)?.email}</td>
                                    <td className="p-4 border border-slate-700">
                                        <Link href={`/certification/${certificationId}`} >
                                            {certifications.find((certification) => certification.uid === certificationId)?.name}
                                        </Link>
                                    </td>
                                    <td className="p-4 border border-slate-700">{completed ? 'Completada' : 'Pendiente'}</td>
                                    <td className="p-4 border border-slate-700">

                                        <Tooltip title="Marcar como completada">
                                            <IconButton
                                                disabled={completed || (selectedUser_certifications.length === 0 ? false : true)}
                                                className='text-[--primary] hover:text-[--secondary] mr-5'
                                                onClick={() => completedUser_certifications(uid)}
                                            >
                                                <FaCheckCircle size={20} />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Eliminar">
                                            <IconButton
                                                disabled={selectedUser_certifications.length === 0 ? false : true}
                                                className='text-red-500 hover:text-red-700 mr-5'
                                                onClick={() => toggleModalOption(uid || '')}
                                            >
                                                <IoTrash size={20} />
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
                    disabled={selectedUser_certifications.length === 0 ? true : false}
                    onClick={() => toggleModalOption(selectedUser_certifications)}
                    className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md'

                >
                    Eliminar marcados
                </button>
            </div>

        </>
    );
};