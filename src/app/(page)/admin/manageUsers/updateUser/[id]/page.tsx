"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { loadUserById, putUser } from "@/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { DataModal, User } from "@/interfaces";
import { CreateAccountUserForm, ModalAnswer } from "@/components";


interface Props {
    params: {
        id: string;
    }
}


export default function Page({ params }: Props) {
    const [isNotFound, setIsNotFound] = useState(false);

    const { id } = params;

    const [infoUser, setInfoUser] = useState<User>();


    const loadUser = async () => {
        try {
            const res = await loadUserById(id);
            setInfoUser(res.data.user);
            // console.log(res)
        } catch (error) {
            console.log(error);
            setIsNotFound(true);
        }
    }


    useEffect(() => {
        loadUser();

        if (isNotFound) notFound();
    }, [isNotFound]);




    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<User>();


    useEffect(() => {
        if (infoUser)
            reset(infoUser);
    }, [infoUser, reset]);




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




    const onSubmit: SubmitHandler<User> = async (data) => {

        if (data.password.length === 0) {
            delete data.password;
        }

        // console.log(data)
        try {
            const res = await putUser(data, id);
            console.log(res);

            const msgModal: DataModal = {
                title: 'Modificar cuenta',
                text: res.data.msg
            }
            setDataModal(msgModal)
            toggleModal();

        } catch (error: any) {
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Modificar cuenta',
                text: error.response.data.errors[0].msg
            }
            setDataModal(msgModal)
            toggleModal();
            console.log(error);
        }

    }

    const router = useRouter();


    useEffect(() => {
        if (isRedirect) router.push('/admin/manageUsers');
    }, [isRedirect]);

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
            <div className="flex flex-col text-center">

                <h1 className="subTitle">Modificar información de usuario</h1>

                <div className="flex flex-col items-center mt-10">

                    <form
                        name='Actualizar Usuario'
                        className='flex flex-col'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <CreateAccountUserForm
                            errors={errors}
                            register={register}
                            isUpdate={true}
                            infoUser={infoUser}
                        />
                    </form>

                </div>
            </div>
        </>
    )
}

