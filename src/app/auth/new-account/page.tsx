// import { titleFont } from '@/config/fonts';
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { newAccount } from '@/api';
import { isAuth } from '@/helper/manageCookie';
import { useRouter } from 'next/navigation';


type Inputs = {
  name: string;
  email: string;
  password: string;
  role: string;
}




export default function Page() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  }


  const styleInput = {
    correct: 'border-blue-200 bg-blue-50 focus:border-blue-600',
    error: 'border-red-800 bg-[#fff] focus:ring-red-600 text-black'
  };



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // todo hay q ver como manejar el asignar roles (esta x defecto el de usuario)
    data.role = 'USER_ROLE';


    try {
      const res = await newAccount(data);
      // console.log('has submit', res);
      router.push('/auth/login');

    } catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {
    if (isAuth()) router.push('/')
  }, []);


  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-40 mb-36">

      <h1 className="text-4xl mb-5">Nueva cuenta</h1>

      <div className="flex flex-col">

        <form
          name='login'
          className='flex flex-col'
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* name */}
          <div className='mb-5'>
            {/* <label htmlFor="email" className='mt-4 mb-2'>Nombre completo</label> */}

            <input
              className={`px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 border-2
              ${errors.name ? styleInput.error : styleInput.correct}`}
              type="text"
              placeholder='nombre completo'
              {...register("name", { required: 'El campo es requerido' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* email */}
          <div className='mb-5'>
            {/* <label htmlFor="email" className='mt-4 mb-2'>Correo electrónico</label> */}

            <input
              className={`px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 border-2
              ${errors.email ? styleInput.error : styleInput.correct}`}
              type="text"
              placeholder='name@gmail.com'
              {...register("email", {
                required: 'El campo es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: 'Introduce un email válido'
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>


          {/* Password */}
          <div className='mb-5'>
            {/* <label htmlFor="password" className='mt-4 mb-2'>Contraseña</label> */}

            <input
              className={`px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 border-2
              ${errors.password ? styleInput.error : styleInput.correct}`}
              type={showPassword ? "text" : "password"}
              placeholder='password'
              {...register("password", {
                required: 'El campo es requerido',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                  message: 'La contraseña no es valida'
                }
              })}
            />

            <div className='relative bottom-8 left-[90%] cursor-pointer'>
              {
                showPassword ?
                  <IoEyeOutline
                    className={errors.password ? 'text-red-500' : 'text-blue-500'}
                    size={24}
                    onClick={changeShowPassword}
                  /> :
                  <IoEyeOffOutline
                    className={errors.password ? 'text-red-500' : 'text-blue-500'}
                    size={24}
                    onClick={changeShowPassword}
                  />
              }
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm relative bottom-6">{errors.password.message}</p>
            )}

          </div>


          <button
            className='px-4 py-2 rounded-full bg-[#007bff] hover:bg-[#0056b3] text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Crear cuenta
          </button>

        </form>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-blue-500"></div>
          <div className="px-2 text-blue-800">O</div>
          <div className="flex-1 border-t border-blue-500"></div>
        </div>

        <Link
          href="/auth/login"
          className="px-4 py-2 rounded-full bg-[transparent] border border-[#007bff] hover:bg-[#0056b3] text-white w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500">
          Ingresar
        </Link>

      </div>
    </div>
  );

}