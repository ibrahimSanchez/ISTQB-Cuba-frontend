"use client";

import { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa6';
import { User, DataModal } from '@/interfaces';
import Link from 'next/link';
import { deleteArrayUser, deleteUser } from '@/api';
import { ModalAnswer, ModalOption } from '@/components';
import { IconButton, Tooltip } from '@mui/material';



interface Props {
    users: User[];
    setLoadUserData: Function;
    loadUserData: boolean;
}

export const UserTable = ({ users, loadUserData, setLoadUserData }: Props) => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        setSelectedUsers(prev =>
            prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
        );
    };



    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar el usuario?');
    const [userIdSelected, setUserIdSelected] = useState('');

    const toggleModalOption = (id: any) => {
        setUserIdSelected(id);
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

        if (selectedUsers.length === 0) {

            try {
                const res = await deleteUser(userIdSelected);
                // console.log(res)

                const msgModal: DataModal = {
                    title: 'Eliminar cuenta de usuario',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();

                setLoadUserData(!loadUserData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar cuenta de usuario',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                console.log(error.response.data.msg);
            }
        }
        else {

            try {
                const res = await deleteArrayUser(selectedUsers);
                console.log(res)

                const msgModal: DataModal = {
                    title: 'Eliminar cuentas de usuario',
                    text: res.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                setSelectedUsers([]);
                setLoadUserData(!loadUserData);

            } catch (error: any) {
                // console.log(error)
                setIsError(true);
                const msgModal: DataModal = {
                    title: 'Eliminar cuentas de usuario',
                    text: error.response.data.msg
                }
                setDataModal(msgModal)
                toggleModal();
                console.log(error.response.data.msg);
            }
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
                                        if (selectedUsers.length === users.length) {
                                            setSelectedUsers([]);
                                        } else {
                                            setSelectedUsers(users.map(user => user.uid));
                                        }
                                    }}
                                />
                            </th>
                            <th className="p-4 border border-slate-600 text-start">Nombre</th>
                            <th className="p-4 border border-slate-600 text-start">Correo</th>
                            <th className="p-4 border border-slate-600 text-start">Rol</th>
                            <th className="p-4 border border-slate-600 text-start">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-white">
                                    No hay usuarios disponibles
                                </td>
                            </tr>
                        ) : (
                            users.map(user => (
                                <tr key={user.uid}>
                                    <td className="p-4 border border-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.includes(user.uid)}
                                            onChange={() => handleSelect(user.uid)}
                                        />
                                    </td>
                                    <td className="p-4 border border-slate-700">{user.name}</td>
                                    <td className="p-4 border border-slate-700">{user.email}</td>
                                    <td className="p-4 border border-slate-700">{user.role}</td>
                                    <td className="p-4 border border-slate-700">

                                        <Tooltip title="Editar">
                                            <IconButton
                                                disabled={selectedUsers.length === 0 ? false : true}
                                                className='text-blue-500 hover:text-blue-700 mr-5'
                                            >
                                                {selectedUsers.length === 0 ?
                                                    <Link href={`/admin/manageUsers/updateUser/${user.uid}`}>
                                                        <FaPen size={20} />
                                                    </Link>
                                                    : <FaPen size={20} />

                                                }
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Borrar">
                                            <IconButton
                                                disabled={selectedUsers.length === 0 ? false : true}
                                                className='text-red-500 hover:text-red-700 mr-5'
                                                onClick={() => toggleModalOption(user.uid || '')}
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
                    disabled={selectedUsers.length === 0 ? true : false}
                    onClick={() => toggleModalOption(selectedUsers)}
                    className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md'

                >
                    Eliminar marcados
                </button>

                <button
                    className='bg-green-600 hover:bg-green-700 mr-5  text-white p-2 rounded-md'
                >
                    <Link href="/admin/manageUsers/addUser">
                        Crear usuario
                    </Link>
                </button>
            </div>

        </>
    );
};