"use client";

import { notFound } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getJobApplicationById, putJobApplication } from "@/api";
import { DataModal, JobApplication } from "@/interfaces";
import { Button } from "@mui/material";
import { JobApplicationsContext } from "@/context";
import { ModalAnswer } from "@/components";



interface Props {
    params: {
        id: string;
    }
}


export default function Page({ params }: Props) {

    const {
        loadJobApplicationData,
        setLoadJobApplicationData
    } = useContext(JobApplicationsContext);

    const { id } = params;

    const [jobApplication, setJobApplication] = useState<JobApplication>();
    const [isNotFound, setIsNotFound] = useState(false);


    const loadCertification = async () => {
        try {
            const res = await getJobApplicationById(id);
            setJobApplication(res.data.jobApplication);
            // console.log(res.data.jobApplication);

        } catch (error) {
            console.log(error);
            setIsNotFound(true);
        }
    }

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
    
    const approvedJobApplication = async () => {
        try {
            const res = await putJobApplication(id, { approved: true });
            // console.log(res)

            const msgModal: DataModal = {
                title: 'Aceptar aplicación de trabajo',
                text: 'Aplicación de trabajo aceptada'
            }
            setDataModal(msgModal)
            toggleModal();

            setLoadJobApplicationData(!loadJobApplicationData);

        } catch (error: any) {
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Aceptar aplicación de trabajo',
                text: error.response.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
        }
    }




    // const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    // const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la solicitud de trabajo?');

    // const toggleModalOption = () => {
    //     setModalOptionOpen(!isModalOptionOpen);
    // };

    // const actionDeleteUser = async () => {
    //     try {
    //         const res = await deleteJobApplication(id);

    //         const msgModal: DataModal = {
    //             title: 'Eliminar solicitud de trabajo',
    //             text: res.data.msg
    //         }
    //         setDataModal(msgModal)
    //         toggleModal();

    //         setLoadJobApplicationData(!loadJobApplicationData);

    //     } catch (error: any) {
    //         // console.log(error)
    //         setIsError(true);
    //         const msgModal: DataModal = {
    //             title: 'Eliminar solicitud de trabajo',
    //             text: error.response.data.msg
    //         }
    //         setDataModal(msgModal)
    //         toggleModal();
    //         console.log(error.response.data.msg);
    //     }
    // }



    useEffect(() => {
        loadCertification();

        if (isNotFound) notFound();
    }, [isNotFound, loadJobApplicationData]);


    return (
        <>

            {/* Modal option*/}
            {/* < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDeleteUser}
            /> */}


            {/* Modal */}
            <ModalAnswer
                isOpen={isModalOpen}
                onClose={toggleModal}
                isError={isError}
                dataModal={dataModal}
                redirect={setIsRedirect}
            />
            {
                jobApplication && (
                    <div
                        className="mt-10 p-10"
                    >
                        <div className="flex justify-between">

                            <div className="">
                                <h2 className="subTitle mb-10">
                                    {jobApplication?.nameUser}
                                </h2>

                                <h3 className="text mb-10">
                                    {jobApplication?.emailUser}
                                </h3>
                            </div>

                            <div>

                                <h2 className={`text-2xl font-bold mb-10
                                    ${jobApplication?.approved ? 'text-[#1d8240]' : 'text-[#821d1d]'}`}
                                >
                                    {jobApplication?.approved ? 'Aprobada' : 'Pendiente'}
                                </h2>

                                {
                                    !jobApplication?.approved &&
                                    <Button
                                        variant="contained"
                                        color="success"
                                        className="mr-5"
                                        onClick={() => approvedJobApplication()}
                                    >
                                        Aprobar
                                    </Button>
                                }
                                {/* <Button
                                    variant="contained"
                                    color="error"
                                    className="mr-5"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => toggleModalOption()}
                                >
                                    Borrar
                                </Button> */}
                            </div>
                        </div>

                        <p className="w-full text-[--text_color]">
                            {jobApplication?.description}
                        </p>
                    </div>
                )
            }
        </>
    )
}
