"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurseById } from "@/api";
import { Certification } from "@/interfaces";
import Link from "next/link";
import { isAuth } from "@/helper";




interface Props {
    params: {
        id: string;
    }
}


export default function Page({ params }: Props) {

    const [certification, setCertification] = useState<Certification>({});
    const [isNotFound, setIsNotFound] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);

    const { id } = params;

    const loadCertification = async () => {

        try {
            const cert = await getCurseById(id);
            setCertification(cert.data.curse);
            console.log(cert.data.curse);

        } catch (error) {
            console.log(error);
            setIsNotFound(true);
        }
    }

    useEffect(() => {
        loadCertification();

        if (isNotFound) notFound();

        setIsUserAuth(isAuth());

    }, [isNotFound]);


    

    return (
        <div className="mt-28 sm:px-14 mb-28">

            <h2 className="title">{certification.name}</h2>

            <h4 className="subTitle">{certification.category}</h4>

            <p>
                {certification.description}
            </p>

            <p>
                {certification.prise}
            </p>



            {
                isUserAuth ?
                    <Link
                        href={`/certification/${id}/reservation`}
                        className="btn-primary"
                    >
                        Solicitar
                    </Link>
                    :
                    <p className="text-red-600">Para solicitar la certificación debe estar autenticado</p>
            }



        </div>
    )
}
