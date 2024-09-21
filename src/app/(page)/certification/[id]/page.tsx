"use client";

import { notFound } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getCertificationById } from "@/api";
import { Certification } from "@/interfaces";
import Link from "next/link";
import { AuthContext } from "@/context";
import { ModalSpinner } from "@/components";

interface Props {
    params: {
        id: string;
    }
}


export default function Page({ params }: Props) {

    const { userAuth } = useContext(AuthContext);

    const [certification, setCertification] = useState<Certification>();
    const [isNotFound, setIsNotFound] = useState(false);
    const [openModalSpinner, setOpenModalSpinner] = useState(false);

    const { id } = params;

    const loadCertification = async () => {

        try {
            const cert = await getCertificationById(id);
            setCertification(cert.data.certifications);
            setOpenModalSpinner(false);
            // console.log(cert.data.certifications);
        } catch (error) {
            // console.log(error);
            setIsNotFound(true);
        }
    }


    useEffect(() => {
        setOpenModalSpinner(true);
        loadCertification();

        if (isNotFound) notFound();

    }, [isNotFound]);


    return (
        !certification ?
            <ModalSpinner open={openModalSpinner} />
            : <div className="mt-16 px-8 sm:px-14 p-6 m-4 flex flex-col justify-between h-full">

                <h2 className="text-xl font-bold mb-6 title">{certification?.name}</h2>
                <p className="text-gray-300 mb-4">{certification?.description}</p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-gray-400">{certification?.category}</span>
                    <span className="font-semibold text-lg text-red-500">${certification?.prise}</span>
                </div>

                <div className="flex justify-center">
                    {
                        userAuth.logged ?
                            <Link
                                href={`/certification/${id}/reservation`}
                                className="p-6 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition-colors"
                            >
                                Reservar
                            </Link>
                            :
                            <p className="text-red-600">Para solicitar la certificación debe estar autenticado</p>
                    }
                </div>
            </div>
    )
}
