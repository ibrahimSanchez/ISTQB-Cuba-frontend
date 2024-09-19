"use client";

import { useEffect, useState } from "react";
import notFound from "../not-found";
import { IoPerson } from "react-icons/io5";
import { User } from "@/interfaces";
import { getUserById } from "@/api";


interface Props {
    params: {
        id: string;
    }
}


export default function Page({ params }: Props) {

    // const { id } = params;
    const [isNotFound, setIsNotFound] = useState(false);
    const [userData, setUserData] = useState<User>();



    const loadUserData = async () => {
        const res = await getUserById();
        // console.log(res.data)
        setUserData(res.data.user)
    }


    useEffect(() => {
        if (isNotFound) notFound();

        loadUserData()

    }, [isNotFound]);

    return (

        <div className="flex">
            <IoPerson
                size={200}
                className="text-[#053b5e] p-2 shadow-[#053b5e] shadow-sm rounded-3xl bg-[#1e1e1e]"
            />

            <div className="mx-5">
                <h1 className="mb-8 title">{userData?.name}</h1>
                <h3 className="mb-8 subTitle">{userData?.email}</h3>
                <h3 className="mb-8 text-[#053b5e] text-xl">{userData?.role}</h3>
            </div>


        </div>
    )
}
