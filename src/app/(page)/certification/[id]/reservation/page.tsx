"use client";

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { decodeToken } from "react-jwt";
import { postReservations } from "@/api";
import { useEffect, useState } from 'react';
import { getCookie } from '@/helper';
import Link from 'next/link';
import { ModalAnswer } from '@/components';
import { DataModal, Reservation } from '@/interfaces';
import { Button } from '@mui/material';


interface Props {
    params: {
        id: string;
    }
}



export default function Page({ params }: Props) {

    const { id } = params;

    const router = useRouter();


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


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Reservation>()
    const onSubmit: SubmitHandler<Reservation> = async (data) => {

        const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
        const dataToken: any = decodeToken(token);

        data.userId = dataToken?.uid.toString();
        data.certificationId = id;

        try {
            const res = await postReservations({
                userId: data.userId,
                certificationId: data.certificationId
            }, token)
            // console.log(res);

            const msgModal: DataModal = {
                title: 'Solicitar reservación',
                text: res.data.msg
            }
            setDataModal(msgModal)
            toggleModal();

        } catch (error: any) {
            console.log(error)
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Solicitar reservación',
                text: error.response.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
            console.log("msg:", error.response.data.errors[0]);
        }
    }


    useEffect(() => {
        if (isRedirect) router.push(`/certification/${id}`);
    }, [isRedirect]);


    return (
        <div className="flex flex-col min-h-screen mt-16 sm:px-14 p-6 items-center text-center">

            {/* Modal */}
            <ModalAnswer
                isOpen={isModalOpen}
                onClose={toggleModal}
                isError={isError}
                dataModal={dataModal}
                redirect={setIsRedirect}
            />



            <h1 className="title text-5xl mb-5">Solicitar reservación</h1>

            <div className="flex flex-col">

                <form
                    name='login'
                    className='flex flex-col '
                    onSubmit={handleSubmit(onSubmit)}
                >


                    {/* name */}
                    {/* <div className='mb-5'>
                        <input
                            className={`px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 border-2
                        ${errors.name ? styleInput.error : styleInput.correct}`}
                            type="text"
                            placeholder='nombre completo'
                            {...register("name", {
                                required: 'El campo es requerido',
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div> */}




                    {/* email */}
                    {/* <div className='mb-5'>
                        <input
                            className={`px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 border-2
                        ${errors.email ? styleInput.error : styleInput.correct}`}
                            type="text"
                            placeholder='name@gmail.com'
                            {...register("email", {
                                required: 'El campo es requerido',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                    message: 'Introduce un email válido'
                                }
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div> */}



                    <Button
                        className='px-4 py-2 rounded-full btn-primary'
                    >
                        Solicitar
                    </Button>

                    <Link
                        href={`/certification/${id}`}
                        className='my-3 px-4 py-2 rounded-full bg-[#ff002b] hover:bg-[#b30027] text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-red-500'
                    >
                        Volver
                    </Link>
                </form>



            </div>

        </div>
    )
}
