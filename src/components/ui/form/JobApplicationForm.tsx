'use client';

import { postJobApplication } from "@/api";
import { DataModal, JobApplication } from "@/interfaces";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalAnswer } from "../modal/ModalAnswer";
import { sxCorrect, sxError } from "@/utils";
import { Button, FormControl, TextField } from "@mui/material";




export const JobApplicationForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<JobApplication>();


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




    const onSubmit: SubmitHandler<JobApplication> = async (data) => {

        try {
            const res = await postJobApplication(data);
            console.log(res);

            const msgModal: DataModal = {
                title: 'Solicitud de trabajo',
                text: res.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
            reset()
        } catch (error: any) {
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Solicitud de trabajo',
                text: error.response.data.errors[0].msg
            }
            setDataModal(msgModal)
            toggleModal();
            console.log(error);
        }

    }



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

            <form
                className="space-y-4 text-center flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* name */}
                <FormControl className=''>
                    <TextField
                        id="outlined-basic"
                        label="Nombre completo *"
                        variant="outlined"
                        sx={errors.nameUser ? sxError : sxCorrect}
                        helperText={errors.nameUser && errors.nameUser.message}
                        error={errors.nameUser ? true : false}
                        {...register("nameUser", {
                            required: 'El campo es requerido',
                        })}
                    />
                </FormControl>

                {/* email */}
                <FormControl className='mb-6'>
                    <TextField
                        id="outlined-basic"
                        label="Correo *"
                        variant="outlined"
                        sx={errors.emailUser ? sxError : sxCorrect}
                        helperText={errors.emailUser && errors.emailUser.message}
                        error={errors.emailUser ? true : false}
                        {...register("emailUser", {
                            required: 'El campo es requerido',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                message: 'Introduce un email válido'
                            }
                        })}
                    />
                </FormControl>

                <FormControl className='mb-6'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Experiencia y Habilidades *"
                        multiline
                        rows={4}
                        sx={errors.description ? sxError : sxCorrect}
                        helperText={errors.description && errors.description.message}
                        error={errors.description ? true : false}
                        {...register("description", { required: 'El campo es requerido' })}
                    />
                </FormControl>


                <Button
                    variant="contained"
                    size='large'
                    type='submit'
                    className="btn-primary"
                >
                    Enviar Solicitud
                </Button>

            </form>

        </>
    )
}
