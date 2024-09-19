'use client';

import { Certification } from "@/interfaces";
import { CardCertifications } from "../card/CardCertifications"
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
    level: string;
    certifications: Certification[];
}
 

export const SectionCertification = ({ level, certifications }: Props) => {

    const [certificationData, setCertificationData] = useState<Certification[]>([]);

    useEffect(() => {
        const data = certifications.filter(cert => cert.category === level);
        setCertificationData(data);

    }, [certifications]);

    return (
        <section id="esquema" className="mb-16">

            <h4 className="text-xl font-bold subTitle">
                {level}
            </h4>

            <div className={
                clsx(
                    "flex overflow-auto",
                    {
                        "justify-evenly": certificationData.length
                    }
                )
            }>

                {
                    certificationData.length === 0 ?
                        <div className="m-5">
                            <p>No hay certificaciones disponibles</p>
                        </div>
                        :
                        certificationData.map(({ category, name, description, prise, uid }, i) => (
                            <CardCertifications
                                key={name + i + category}
                                category={category}
                                description={description}
                                prise={prise}
                                name={name}
                                uid={uid}
                            />
                        ))
                }

            </div>

        </section>
    )
}
