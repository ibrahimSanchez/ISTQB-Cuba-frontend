"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { newAccount } from "@/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { DataModal, User } from "@/interfaces";
import { CreateAccountUserForm, ModalAnswer } from "@/components";



export default function Page() {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<User>();

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

        // data.role = 'USER_ROLE';

        try {
            const res = await newAccount(data);
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

                <div className="flex flex-col items-center mt-6">

                    <div className='bg-[#fafbfb] p-10 rounded-3xl shadow-2xl shadow-black'>

                        <form
                            name='Crear Usuario'
                            className='flex flex-col'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <CreateAccountUserForm
                                errors={errors}
                                register={register}
                                isUpdate={true}
                            />

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
