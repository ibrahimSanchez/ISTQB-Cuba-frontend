'use client';

import { Button, FormControl, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { sxCorrect, sxError } from "@/utils"
import { useState } from "react";




type Inputs = {
    name?: string
    certificationName?: string
}




export const SCRGrid = () => {

    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        try {
            // const res = await login(data);
            console.log(data)


        } catch (error: any) {
            console.log("msg:", error.response.data.msg)
        }

    }

    return (
        <div className="bg-[--page_background2] h-screen p-10 text-center">


            <h3 className="subTitle mb-2">Buscar por nombre o número de certificado</h3>
            {/* Separador */}
            <div className="w-full h-[2px] bg-blue-950 mb-8"></div>



            <form
                // className=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-evenly">
                    <FormControl className='my-4'>
                        <TextField
                            id="outlined-basic"
                            label="Nombre completo"
                            variant="outlined"
                            sx={errors.name ? sxError : sxCorrect}
                            helperText={errors.name && errors.name.message}
                            error={errors.name ? true : false}
                            {...register("name")}
                        />
                    </FormControl>

                    <FormControl className='my-4'>
                        <TextField
                            id="outlined-basic"
                            label="Carnet de identidad"
                            variant="outlined"
                            sx={errors.certificationName ? sxError : sxCorrect}
                            helperText={errors.certificationName && errors.certificationName.message}
                            error={errors.certificationName ? true : false}
                            {...register("certificationName")}
                        />
                    </FormControl>

                </div>

                {
                    showAdvancedOptions && (
                        <div className="flex justify-evenly">
                            <FormControl className='my-4'>
                                <TextField
                                    id="outlined-basic"
                                    label="Nombre completo *"
                                    variant="outlined"
                                    sx={errors.name ? sxError : sxCorrect}
                                    helperText={errors.name && errors.name.message}
                                    error={errors.name ? true : false}
                                    {...register("name", {
                                        required: 'El campo es requerido',
                                    })}
                                />
                            </FormControl>

                            <FormControl className='my-4'>
                                <TextField
                                    id="outlined-basic"
                                    label="Nombre completo *"
                                    variant="outlined"
                                    sx={errors.name ? sxError : sxCorrect}
                                    helperText={errors.name && errors.name.message}
                                    error={errors.name ? true : false}
                                    {...register("name", {
                                        required: 'El campo es requerido',
                                    })}
                                />
                            </FormControl>

                        </div>
                    )
                }



                <div>
                    <Button
                        variant="contained"
                        size='large'
                        type='submit'
                        className='btn-primary shadow-lg min-w-[200px] m-4'
                    >
                        Buscar
                    </Button>

                    <Button
                        onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                        variant="contained"
                        size='large'
                        type='button'

                        className='btn-secondary shadow-lg m-4'
                    >
                        Mostrar opciones avanzadas
                    </Button>

                </div>


            </form>




        </div>
    )
}
