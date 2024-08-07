"use client";

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { decodeToken } from "react-jwt";

import { postReservations } from "@/api";

import { useEffect } from 'react';
import { getCookie, isAuth } from '@/helper';
import Link from 'next/link';





interface Props {
    params: {
        id: string;
    }
}

type Inputs = {
    // email: string
    curseId: string
    userId: string
    // name: string
}




export default function Page({ params }: Props) {

    const { id } = params;

    const router = useRouter();

    const styleInput = {
        correct: 'border-blue-200 bg-blue-50 focus:border-blue-600',
        error: 'border-red-700 bg-[#fff] focus:ring-red-600 text-black'
    };




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const token = getCookie('AUTH_TOKEN_KEY');
        const dataToken = decodeToken(token);

        data.userId = dataToken?.uid.toString();
        data.curseId = id;

        try {
            const res = await postReservations(data, token)
            console.log(res);


            router.push(`/certification/${id}`)
        } catch (error: any) {

            console.log("msg:", error.response.data.msg);
        }
    }



    useEffect(() => {
        if (!isAuth()) router.push(`/certification/${id}`);
    }, []);



    return (
        <div className="flex flex-col min-h-screen pt-32 sm:pt-40 items-center text-center">

            <h1 className="text-5xl mb-5">Solicitar reservación</h1>


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



                    <button
                        className='px-4 py-2 rounded-full bg-[#007bff] hover:bg-[#0056b3] text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Solicitar
                    </button>

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
