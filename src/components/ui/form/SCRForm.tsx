'use client';

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { sxCorrect, sxError } from "@/utils";
import { getCertification } from "@/api";
import { ResultDataSearch } from "@/interfaces";

type Inputs = {
    name?: string;
    certification?: string;
    ci?: string;
};

interface Props {
    setDataToShow: Function;
    allData?: ResultDataSearch;
}

export const SCRForm = ({ setDataToShow, allData }: Props) => {
    const [certificationData, setCertificationData] = useState([]);

    const loadcertificationData = async () => {
        try {
            const res = await getCertification();
            setCertificationData(res.data.certifications);
        } catch (error) {
            console.log(error);
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!allData) {
            console.error("No se han cargado los datos necesarios.");
            return;
        }

        const { users, user_certifications, certifications } = allData;

        if (!users || !user_certifications || !certifications) {
            console.error("Faltan datos en allData.");
            return;
        }

        const { ci, name, certification } = data;

        const filteredData = user_certifications
            .map((userCert: any) => {
                const user = users.find((u: any) => u.uid === userCert.userId);
                const cert = certifications.find((c: any) => c.uid === userCert.certificationId);

                if (user && cert) {
                    const matchCi = ci ? user.ci.includes(ci) : true;
                    const matchName = name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
                    const matchCert = certification ? cert.uid === certification : true;

                    if (matchCi && matchName && matchCert) {
                        return {
                            uid: userCert.uid,
                            name: user.name,
                            ci: user.ci,
                            certification: cert.name,
                        };
                    }
                }
                return null;
            })
            .filter((item: any) => item !== null);

        setDataToShow(filteredData);
    };

    const handleReset = () => {
        reset();
        if (allData) {
            const { users, user_certifications, certifications } = allData;

            if (!users || !user_certifications || !certifications) {
                console.error("Faltan datos en allData.");
                return;
            }

            const originalData = user_certifications.map((userCert: any) => {
                const user = users.find((u: any) => u.uid === userCert.userId);
                const cert = certifications.find((c: any) => c.uid === userCert.certificationId);

                if (user && cert) {
                    return {
                        uid: userCert.uid,
                        name: user.name,
                        ci: user.ci,
                        certification: cert.name,
                    };
                }
                return null;
            }).filter((item: any) => item !== null);

            setDataToShow(originalData);
        }
    };

    useEffect(() => {
        loadcertificationData();
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full sm:w-[450px] pr-10">
                <div className="bg-[--page_background] mt-6 py-8 px-10 rounded-3xl shadow-2xl shadow-[#413e3e]">
                    <div className="flex flex-col">
                        {/* Nombre */}
                        <FormControl className="mb-6">
                            <TextField
                                label="Nombre completo *"
                                variant="outlined"
                                sx={errors.name ? sxError : sxCorrect}
                                helperText={errors.name && errors.name.message}
                                error={errors.name ? true : false}
                                {...register("name")}
                            />
                        </FormControl>

                        {/* CI */}
                        <FormControl className="mb-6">
                            <TextField
                                label="Carnet de identidad *"
                                variant="outlined"
                                sx={errors.ci ? sxError : sxCorrect}
                                helperText={errors.ci && errors.ci.message}
                                error={errors.ci ? true : false}
                                {...register("ci", {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Solo se permiten números",
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: "El Carnet de Identidad debe tener 11 dígitos",
                                    },
                                    minLength: {
                                        value: 11,
                                        message: "El Carnet de Identidad debe tener 11 dígitos",
                                    },
                                })}
                            />
                        </FormControl>

                        {/* Certificación */}
                        <FormControl className="mb-6" sx={errors.certification ? sxError : sxCorrect}>
                            <InputLabel>Certificación *</InputLabel>
                            <Select
                                label="Certificación *"
                                {...register("certification")}
                                sx={errors.certification ? sxError : sxCorrect}
                            >
                                {certificationData.map(({ uid, name }) => (
                                    <MenuItem key={uid} value={uid}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.certification && (
                                <FormHelperText className="text-[#d32c28]">
                                    {errors.certification.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Botones */}
                        <div className="flex justify-between">
                            <Button
                                sx={{ textTransform: "none" }}
                                variant="contained"
                                size="large"
                                type="submit"
                                className="bg-[#053b5e] hover:bg-[#062b43] shadow-lg"
                            >
                                Buscar
                            </Button>

                            <Button
                                sx={{ textTransform: "none" }}
                                variant="outlined"
                                size="large"
                                className="border text-[#053b5e] border-[#053b5e] hover:bg-[#053b5e] hover:text-white shadow-lg"
                                onClick={handleReset}
                            >
                                Reiniciar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
