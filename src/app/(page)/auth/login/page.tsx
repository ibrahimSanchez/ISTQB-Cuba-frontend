'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from '@/api';
import { ModalAnswer } from '@/components';
import { setCookie } from '@/helper/manageCookie';
import { DataModal } from '@/interfaces';
import { sxCorrect, sxError } from '@/utils';


import { MdOutlineSecurity } from "react-icons/md";
import { AuthContext } from '@/context';
import { authTypes } from '@/types';
import Image from 'next/image';

type Inputs = {
  email: string
  password: string
}




export default function Page() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const router = useRouter();

  const { dispatch } = useContext(AuthContext);

  const [isRedirect, setIsRedirect] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState<DataModal>({
    title: 'Título del Modal',
    text: 'Este es el contenido del modal.'
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };





  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      const res = await login(data);
      console.log('has submit', res)

      const tokenAccess = res.data.token;
      const role = res.data.user.role;

      const accion = {
        type: authTypes.login,
        payload: {
          tokenAccess,
          role
        }
      }

      dispatch(accion);
      router.push('/')

    } catch (error: any) {

      console.log("msg:", error.response.data.msg)
      setDataModal({
        title: 'Inicio de sesión',
        text: error.response.data.msg
      });
      toggleModal();
    }
  }


  return (
    <>
      {/* Modal */}
      <ModalAnswer
        isOpen={isModalOpen}
        onClose={toggleModal}
        isError={true}
        dataModal={dataModal}
        redirect={setIsRedirect}
      />


      <div className="flex flex-col min-h-screen">

        <div className='bg-[#fafbfb] mt-6 pb-8 px-10 rounded-3xl shadow-2xl shadow-[#413e3e]'>

          <div className='flex flex-col items-center'>
            {/* <MdOutlineSecurity
            size={50}
            className='bg-[#1976d2] p-2 rounded-full mb-5'
          /> */}

            <Image
              alt='Login-image'
              width={250}
              height={250}
              src={'/icons/Login.svg'}
            />

            {/* <h1 className="text-5xl mb-10">Iniciar</h1> */}
          </div>


          <div className="flex flex-col">

            <form
              name='login'
              className='flex flex-col '
              onSubmit={handleSubmit(onSubmit)}
            >

              {/* email */}
              <FormControl className='mb-6'>
                <TextField
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


              <FormControl
                className='mb-6'
                sx={errors.password ? sxError : sxCorrect}
                variant="outlined">
                <InputLabel
                  className={`${errors.password ? 'text-[#d32c28]' : ''}`}
                  // sx={errors.password ? sxError : sxCorrect}
                  htmlFor="outlined-adornment-password"
                >
                  Contraseña *
                </InputLabel>
                <OutlinedInput
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
                    required: 'El campo es requerido',
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                      message: 'La contraseña no es valida'
                    }
                  })}
                />
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
                variant="contained"
                size='large'
                type='submit'
                className='w-full btn-primary'
              >
                Iniciar
              </Button>

            </form>


            {/* divisor line */}
            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-[#053b5e]"></div>
              <div className="px-2 text-[#053b5e]">O</div>
              <div className="flex-1 border-t border-[#053b5e]"></div>
            </div>


            <Link
              href="/auth/new-account"
            >
              <Button
                variant="outlined"
                size='large'
                // className='w-full border-[#053b5e] hover:border-[#062b43] hover:bg-[#062b43] text-[#053b5e] hover:text-white shadow-lg'
                className='w-full btn-secondary'
              >
                Crear una cuenta nueva
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

