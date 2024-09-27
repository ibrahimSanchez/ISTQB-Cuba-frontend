'use client';

import { useEffect, useState } from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";
import { sxCorrect, sxError } from "@/utils";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { getMunicipalities, getProvinces, getRoles } from "@/api";



type Role = {
    uid: string;
    role: string;
}

type Direction = {
    uid: string;
    name: string;
    provinceId?: string;
}


export const CreateAccountUserForm = ({ errors, register, isUpdate, isUser = false, infoUser }: any) => {


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [roles, setRoles] = useState<Role[]>([]);

    const loadRoles = async () => {
        try {
            const res = await getRoles();
            setRoles(res.data.roles)
            // console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const [provinces, setProvinces] = useState<Direction[]>([]);

    const loadProvinces = async () => {
        try {
            const res = await getProvinces();
            setProvinces(res.data.provinces)
            // console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const [municipalities, setMunicipalities] = useState<Direction[]>([]);

    const loadMunicipalities = async () => {
        try {
            const res = await getMunicipalities();
            setMunicipalities(res.data.municipalities)
            // console.log(res)
        } catch (error) {
            console.log(error);
        }
    }


    const [municipalitiesToShow, setMunicipalitiesToShow] = useState<Direction[]>([]);

    const handleSelectProvince = (uid: string) => {
        const data = municipalities.filter(({ provinceId }) => provinceId === uid);
        setMunicipalitiesToShow(data);
    }


    useEffect(() => {
        loadProvinces();
        loadMunicipalities();
        !isUser && loadRoles();
    }, []);



    return (
        <>

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


            {/* email */}
            <FormControl className='mb-6'>
                <TextField
                    focused={isUpdate}
                    id="outlined-basic"
                    label="Correo *"
                    variant="outlined"
                    sx={errors.email ? sxError : sxCorrect}
                    helperText={errors.email && errors.email.message}
                    error={errors.email ? true : false}
                    {...register("email", {
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
                    focused={isUpdate}
                    id="outlined-basic"
                    label="Carnet de identidad *"
                    variant="outlined"
                    sx={errors.ci ? sxError : sxCorrect}
                    helperText={errors.ci && errors.ci.message}
                    error={errors.ci ? true : false}
                    {...register("ci", {
                        required: 'El campo es requerido',
                        pattern: {
                            value: /[0-9]/,
                            message: 'Introduce un email válido'
                        }
                    })}
                />
            </FormControl>


            <FormControl className='mb-6' sx={errors.provinceId ? sxError : sxCorrect}>
                <InputLabel
                    className={`${errors.provinceId ? 'text-[#d32c28]' : ''}`}
                    id="demo-simple-select-helper-label"
                >
                    Provincia *
                </InputLabel>
                <Select
                    label="Provincia *"
                    className="text-start"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    laCategory="Provincia"
                    {...register("provinceId", {})}
                    sx={errors.provinceId ? sxError : sxCorrect}
                    error={errors.provinceId ? true : false}
                >
                    {provinces.map(({ uid, name }) => (
                        <MenuItem key={uid} value={uid} onClick={() => handleSelectProvince(uid)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
                {
                    errors.provinceId &&
                    <FormHelperText
                        className='text-[#d32c28]'
                    >
                        {errors.provinceId.message}
                    </FormHelperText>
                }
            </FormControl>


            <FormControl className='mb-6' sx={errors.municipalityId ? sxError : sxCorrect}>
                <InputLabel
                    className={`${errors.municipalityId ? 'text-[#d32c28]' : ''}`}
                    id="demo-simple-select-helper-label"
                >
                    Municipio *
                </InputLabel>
                <Select
                    label="Municipio *"
                    className="text-start"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    laCategory="Provincia"
                    {...register("municipalityId", {})}
                    sx={errors.municipalityId ? sxError : sxCorrect}
                    error={errors.municipalityId ? true : false}
                >
                    {municipalitiesToShow.length === 0 ?
                        <MenuItem value=''>
                            Debe seleccionar una provincia
                        </MenuItem> :
                        municipalitiesToShow.map(({ uid, name }) => (
                            <MenuItem key={uid} value={uid}>
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
                {
                    errors.municipalityId &&
                    <FormHelperText
                        className='text-[#d32c28]'
                    >
                        {errors.municipalityId.message}
                    </FormHelperText>
                }
            </FormControl>


            {
                !isUser &&
                <FormControl className='mb-6' sx={errors.role ? sxError : sxCorrect}>
                    <InputLabel
                        className={`${errors.role ? 'text-[#d32c28]' : ''}`}
                        id="demo-simple-select-helper-label"
                    >
                        Rol {!isUpdate && '*'}
                    </InputLabel>
                    <Select
                        label="Rol *"
                        className="text-start"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        laCategory="Rol"
                        {...register("role", {})}
                        sx={errors.role ? sxError : sxCorrect}
                        error={errors.role ? true : false}
                    >
                        {roles.map(({ uid, role }) => (
                            <MenuItem key={uid} value={role}>
                                {role}
                            </MenuItem>
                        ))}
                    </Select>
                    {
                        errors.role &&
                        <FormHelperText
                            className='text-[#d32c28]'
                        >
                            {errors.role.message}
                        </FormHelperText>
                    }
                </FormControl>
            }


            <FormControl
                className='mb-6'
                sx={errors.password ? sxError : sxCorrect}
                variant="outlined">
                <InputLabel
                    className={`${errors.password ? 'text-[#d32c28]' : ''}`}
                    // sx={errors.password ? sxError : sxCorrect}
                    htmlFor="outlined-adornment-password"
                >
                    Contraseña {!isUpdate && '*'}
                </InputLabel>
                {
                    isUpdate ? (
                        <OutlinedInput
                            focused={isUpdate}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        className={`${errors.password ? 'text-[#d32c28]' : 'text-[--trxt_color]'}`}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            // helperText={errors.password && errors.password.message}
                            label="Contraseña *"
                            sx={errors.password ? sxError : sxCorrect}
                            error={errors.password ? true : false}
                            {...register("password", {
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                                    message: 'La contraseña no es valida'
                                }
                            })}
                        />
                    ) : (
                        <OutlinedInput
                            focused={isUpdate}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        className={`${errors.password ? 'text-[#d32c28]' : 'text-[--text_color]'}`}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            // helperText={errors.password && errors.password.message}
                            label="Contraseña *"
                            sx={errors.password ? sxError : sxCorrect}
                            error={errors.password ? true : false}
                            {...register("password", {
                                required: 'El campo es requerido',
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                                    message: 'La contraseña no es valida'
                                }
                            })}
                        />
                    )
                }
                {
                    errors.password &&
                    <FormHelperText
                        className='text-[#d32c28]'
                    >
                        {errors.password.message}
                    </FormHelperText>
                }
            </FormControl>

            <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                size='large'
                type='submit'
                className='bg-[#053b5e] hover:bg-[#062b43] shadow-lg'
            >
                Enviar
            </Button>

        </>
    )
}
