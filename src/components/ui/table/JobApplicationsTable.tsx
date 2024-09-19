"use client";

import { useState } from 'react';
import Link from 'next/link';
import { IoTrash } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa6';
import { DataModal, JobApplication } from '@/interfaces';
import { deleteArrayJobApplication, deleteJobApplication, putJobApplication } from '@/api';
import { ModalAnswer, ModalOption } from '@/components';
import { FaCheckCircle } from 'react-icons/fa';



interface Props {
    jobApplications: JobApplication[];
    setLoadUserData: Function;
    loadUserData: boolean;
}

export const JobApplicationsTable = ({ jobApplications, loadUserData, setLoadUserData }: Props) => {


    const [selectedJobApplications, setSelectedJobApplications] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        setSelectedJobApplications(prev =>
            prev.includes(id) ? prev.filter(reservationId => reservationId !== id) : [...prev, id]
        );
    };




    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la solicitud de trabajo?');
    const [jobApplicationIdSelected, setJobApplicationIdSelected] = useState('');

    const toggleModalOption = (id: any) => {
        setJobApplicationIdSelected(id);
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



    const actionDeleteUser = async () => {

        if (selectedJobApplications.length === 0) {

            try {
                const res = await deleteJobApplication(jobApplicationIdSelected);

                const msgModal: DataModal = {
                    title: 'Eliminar solicitud de trabajo',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();

                setLoadUserData(!loadUserData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar solicitud de trabajo',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                console.log(error.response.data.msg);
            }
        } else {
            try {
                const res = await deleteArrayJobApplication(selectedJobApplications);

                const msgModal: DataModal = {
                    title: 'Eliminar solicitudes de trabajo',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                setSelectedJobApplications([]);
                setLoadUserData(!loadUserData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar solicitudes de trabajo',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                console.log(error.response.data.msg);
            }
        }
    }


    const approvedJobApplication = async (id: string) => {
        try {
            const res = await putJobApplication(id, { approved: true });
            // console.log(res)

            const msgModal: DataModal = {
                title: 'Aceptar aplicación de trabajo',
                text: 'Aplicación de trabajo aceptada'
            }
            setDataModal(msgModal)
            toggleModal();

            setLoadUserData(!loadUserData);

        } catch (error: any) {
            // console.log(error)
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Aceptar aplicación de trabajo',
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
                action={actionDeleteUser}
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
                    <thead className='bg-[#053b5e] text-white uppercase text-sm'>
                        <tr>
                            <th className="p-4 border border-slate-600 text-start">
                                <input
                                    type="checkbox"
                                    onChange={() => {
                                        if (selectedJobApplications.length === jobApplications.length) {
                                            setSelectedJobApplications([]);
                                        } else {
                                            setSelectedJobApplications(jobApplications.map(({ uid }) => uid));
                                        }
                                    }}
                                />
                            </th>
                            <th className="p-4 border border-slate-600 text-start">Nombre</th>
                            <th className="p-4 border border-slate-600 text-start">Correo</th>
                            <th className="p-4 border border-slate-600 text-start">Descripción</th>
                            <th className="p-4 border border-slate-600 text-start">Estado</th>
                            <th className="p-4 border border-slate-600 text-start">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobApplications.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-white w-full">
                                    No hay solicitudes de trabajo disponibles
                                </td>
                            </tr>
                        ) : (
                            jobApplications.map(({ approved, description, emailUser, nameUser, uid }) => (
                                <tr key={uid}>
                                    <td className="p-4 border border-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={selectedJobApplications.includes(uid)}
                                            onChange={() => handleSelect(uid)}
                                        />
                                    </td>
                                    <td className="p-4 border border-slate-700">{nameUser}</td>
                                    <td className="p-4 border border-slate-700">{emailUser}</td>
                                    <td className="p-4 border border-slate-700">{description}</td>
                                    <td className="p-4 border border-slate-700">{approved ? 'Aprobada' : 'Pendiente'}</td>
                                    <td className="p-4 border border-slate-700">
                                        <button
                                            disabled={approved}
                                            className='text-blue-500 hover:text-blue-700 mr-5'
                                            onClick={() => approvedJobApplication(uid)}
                                        >
                                            <FaCheckCircle size={20} />
                                        </button>
                                        <button
                                            className='text-red-500 hover:text-red-700 mr-5'
                                            onClick={() => toggleModalOption(uid || '')}
                                        >
                                            <IoTrash size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-between mt-6'>
                <button
                    disabled={selectedJobApplications.length === 0 ? true : false}
                    onClick={() => toggleModalOption(selectedJobApplications)}
                    className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md'

                >
                    Eliminar marcados
                </button>
            </div>

        </>
    );
};