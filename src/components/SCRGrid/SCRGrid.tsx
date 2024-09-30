'use client';

import { useEffect, useState } from "react";
import { getCertification, getUser_certification, getUsers } from "@/api";
import { SCRForm } from "../ui/form/SCRForm";
import { SCRTable } from "../ui/table/SCRTable";
import { ResultDataSearch } from "@/interfaces";

interface Data {
    uid: string;
    name: string;
    ci: string;
    certification: string;
}

export const SCRGrid = () => {

    const [allData, setAllData] = useState<ResultDataSearch>({
        user_certifications: [],
        users: [],
        certifications: []
    });
    const [dataToShow, setDataToShow] = useState<Data[]>([]);

    const loadUser_certifications = async () => {
        const res = await getUser_certification();
        return res.data.user_certifications;
    };

    const loadUsers = async () => {
        const res = await getUsers();
        return res.data.users;
    };

    const loadCertifications = async () => {
        const res = await getCertification();
        return res.data.certifications;
    };

    useEffect(() => {
        const loadData = async () => {
            const [userCertifications, users, certifications] = await Promise.all([
                loadUser_certifications(),
                loadUsers(),
                loadCertifications()
            ]);

            setAllData({
                user_certifications: userCertifications,
                users: users,
                certifications: certifications
            });

            const data = userCertifications.map((userCert: any) => {
                const user = users.find((u: any) => u.uid === userCert.userId);
                const certification = certifications.find((c: any) => c.uid === userCert.certificationId);

                if (user && certification) {
                    return {
                        uid: userCert.uid,
                        name: user.name,
                        ci: user.ci,
                        certification: certification.name,
                    };
                }
                return null;
            });

            setDataToShow(data.filter((item: any) => item !== null));
        };

        loadData();
    }, []);

    return (
        <>
            <section className="bg-[--page_background2] min-h-screen p-10">
                <h3 className="subTitle mb-2">Buscar por nombre o número de certificado</h3>
                <div className="w-full h-[2px] bg-blue-950 mb-8"></div>

                <div className="lg:flex justify-between">
                    <SCRForm
                        // setResultDataSearch={setAllData}
                        setDataToShow={setDataToShow}
                        allData={allData}
                    />

                    <SCRTable dataToShow={dataToShow || []} />
                </div>
            </section>

            <button onClick={() => console.log(allData)}>click aki</button>
        </>
    );
};
