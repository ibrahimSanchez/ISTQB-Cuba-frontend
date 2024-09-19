'use client';

import { useEffect, useState } from "react";
import { getCategories } from "@/api";
import {
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { sxCorrect, sxError } from "@/utils";



type Category = {
    uid: string;
    category: string;
}






export const CertificationForm = ({ errors, register, isUpdate }: any) => {

    const [categories, setCategories] = useState<Category[]>([]);

    const loadCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data.categories)
            // console.log(res)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        loadCategories();
    }, []);


    return (
        <div className="w-[600px] flex flex-col">

            {/* name */}
            <FormControl className='mb-6'>
                <TextField
                    focused={isUpdate}
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

            {/* prise */}
            <FormControl className='mb-6'>
                <TextField
                    focused={isUpdate}
                    id="outlined-basic"
                    label="Precio *"
                    variant="outlined"
                    sx={errors.prise ? sxError : sxCorrect}
                    helperText={errors.prise && errors.prise.message}
                    error={errors.prise ? true : false}
                    {...register("prise", {
                        required: 'El campo es requerido',
                        min: 0
                    })}
                />
            </FormControl>



            <FormControl className='mb-6' sx={errors.category ? sxError : sxCorrect}>
                <InputLabel
                    className={`${errors.category ? 'text-[#d32c28]' : ''}`}
                    id="demo-simple-select-helper-label"
                >
                    Categoría *
                </InputLabel>
                <Select
                    label='Categoría *'
                    className="text-start"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    laCategory="Categoría"
                    {...register("category", { required: 'El campo es requerido' })}
                    sx={errors.category ? sxError : sxCorrect}
                    error={errors.category ? true : false}
                >
                    {categories.map(({ uid, category }) => (
                        <MenuItem key={uid} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
                {
                    errors.category &&
                    <FormHelperText
                        className='text-[#d32c28]'
                    >
                        {errors.category.message}
                    </FormHelperText>
                }
            </FormControl>



            <FormControl className='mb-6'>
                <TextField
                    focused={isUpdate}
                    id="outlined-multiline-static"
                    label="Descripción *"
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
            >
                Enviar
            </Button>

        </div>
    )
}
