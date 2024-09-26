'use client';

import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { IoTrash } from 'react-icons/io5';
import { Certification } from '@/interfaces';
import { ModalOption } from '@/components';
import { deleteCertification } from '@/api';
import Link from 'next/link';


interface Props {
    certification: Certification;
    setLoadData: Function;
    loadData: boolean;
}



export const CardCertificationUI = ({ certification, loadData, setLoadData }: Props) => {

    const { name, category, description, prise, uid } = certification;

    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la certificación?');

    const toggleModalOption = () => {
        setModalOptionOpen(!isModalOptionOpen);
    };



    const actionDelete = async () => {
        try {
            const res = await deleteCertification(uid);
            // console.log(res)
            setLoadData(!loadData);

        } catch (error: any) {
            console.log(error)
        }
    }


    const textShowDescription = description.substring(0, 250);

    return (
        <>
            {/* Modal option*/}
            < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDelete}
            />


            <div className="min-w-[350px] min-h-[400px] max-w-[350px] bg-white border border-[#05375e] rounded-lg shadow m-5 card flex flex-col justify-between">

                <div className="p-5 gradient-card rounded-br-full h-[150px] flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight text-white">
                        {name}
                    </h5>
                    <h6 className="text-sm tracking-tight text-white">
                        {category}
                    </h6>
                </div>


                <p className="mt-3 font-normal text-sm text-red-500 p-5">
                    Precio: {prise}
                </p>

                <p className="mt-3 font-normal text-xs text-[--text_color] pb-5 px-5">
                    {textShowDescription}
                </p>

                <div className="flex justify-between pb-5 px-5">
                    <Link
                        href={`/profesor/manageCertifications/updateCertification/${uid}`}
                        className='bg-green-800 hover:bg-green-900 mr-5 text-white p-2 rounded-md flex'
                    >
                        Modificar
                        <FaPen
                            size={20}
                            className='ml-2'
                        />
                    </Link>
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
                </div>
            </div>

        </>
    );
}
