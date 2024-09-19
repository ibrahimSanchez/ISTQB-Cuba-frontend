"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { getCertificationById, putCertification } from "@/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { Certification, DataModal } from "@/interfaces";
import { CertificationForm, ModalAnswer } from "@/components";




interface Props {
    params: {
        id: string;
    }
}




export default function Page({ params }: Props) {
    const [isNotFound, setIsNotFound] = useState(false);

    const { id } = params;

    const [defaultData, setDefaultData] = useState<Certification>();


    const loadData = async () => {
        try {
            const res = await getCertificationById(id);

            setDefaultData(res.data.certifications);
            // console.log(res)
        } catch (error) {
            console.log(error);
            setIsNotFound(true);
        }
    }


    useEffect(() => {
        loadData();
        if (isNotFound) notFound();
    }, [isNotFound]);




    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        reset
    } = useForm<Certification>();


    useEffect(() => {
        if (defaultData)
            reset(defaultData);
    }, [defaultData, reset]);



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




    const onSubmit: SubmitHandler<Certification> = async (data) => {

        // console.log(data)
        try {
            const res = await putCertification(data, id);
            console.log(res);

            const msgModal: DataModal = {
                title: 'Modificar certificación',
                text: res.data.msg
            }
            setDataModal(msgModal)
            toggleModal();

        } catch (error: any) {
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Modificar certificación',
                text: error.response.data.errors[0].msg
            }
            setDataModal(msgModal)
            toggleModal();
            console.log(error);
        }

    }


    const router = useRouter();


    useEffect(() => {
        isRedirect && router.push('/profesor')
    }, [isRedirect])


    return (
        <>

            {/* Modal */}
            <ModalAnswer
                isOpen={isModalOpen}
                onClose={toggleModal}
                isError={isError}
                dataModal={dataModal}
                redirect={setIsRedirect}
            />
            <div className="flex flex-col min-h-screen text-center">

                <h1 className="subTitle mb-10">Modificar Certificación</h1>

                <form
                    className="space-y-4 flex justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CertificationForm
                        errors={errors}
                        register={register}
                        isUpdate={true}

                    />

                </form>


            </div>
        </>
    )
}
