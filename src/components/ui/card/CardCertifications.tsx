import { Certification } from "@/interfaces";
import Image from "next/image"
import Link from "next/link";





export const CardCertifications = ({ category, description, name, uid }: Certification) => {

    const textShowDescription = description.substring(0, 250);

    return (

        <div className="min-w-[350px] bg-white border border-[#05375e] rounded-lg shadow m-5 card">

            <div className="p-5 gradient-card rounded-br-full h-[150px] flex flex-col justify-between">
                <h5 className="text-xl tracking-tight text-white">
                    {name}
                </h5>
                <h6 className="text-sm tracking-tight text-white">
                    {category}
                </h6>
            </div>

            <p className="mt-3 font-normal text-xs text-gray-300 p-5">
                {textShowDescription}
                {
                    description.length > 250 && (
                        <Link
                            href={`/certification/${uid}`}
                            className="inline-flex font-medium items-center text-gray-500 underline"
                        >
                            ...
                        </Link>
                    )
                }
            </p>

            <div className="flex justify-between pb-5 px-5">
                <Link
                    href={`/certification/${uid}`}
                    className="inline-flex font-medium items-center text-gray-500 underline text-xs"
                >
                    Leer más
                </Link>

                <Image
                    className="rounded-t-lg"
                    src="/logo.jpg"
                    alt='img'
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}
