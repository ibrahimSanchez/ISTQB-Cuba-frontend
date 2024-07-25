// import { titleFont } from '@/config/fonts';
'use client';

import { login } from '@/api';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';


type Inputs = {
  email: string
  password: string
}


export default function Page() {

  const styleInput = {
    correct: 'border-blue-200 bg-blue-50 focus:border-blue-600',
    error: 'border-red-200 bg-red-50 focus:border-red-600'
  };

  const [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  }



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const res = await login(data);
    
    console.log('has submit', data, res)
  }



  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-40">

      <h1 className="text-4xl mb-5">Iniciar</h1>


      <div className="flex flex-col">

        <form
          name='login'
          className='flex flex-col'
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* email */}
          <div className='mb-5'>
            <label htmlFor="email" className='mt-4 mb-2'>Correo electrónico</label>

            <input
              className={`w-[100%] px-5 py-2 border rounded focus:outline-none mb-0
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
            <label htmlFor="password" className='mt-4 mb-2'>Contraseña</label>

            <input
              className={`w-[100%] px-5 py-2 border rounded focus:outline-none mb-0
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


          <button className='btn-primary' >Iniciar</button>

        </form>


        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-blue-500"></div>
          <div className="px-2 text-blue-800">O</div>
          <div className="flex-1 border-t border-blue-500"></div>
        </div>

        <Link
          href="/auth/new-account"
          className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>

      </div>
    </div>
  );
}
















// <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

// <h1 className="text-4xl mb-5">Ingresar</h1>

// <div className="flex flex-col">

//   <form
//     className='flex flex-col'
//     onSubmit={handleSubmit(onSubmit)}
//   >

//     <label htmlFor="email" className='mt-4 mb-2'>Correo electrónico</label>
//     <input
//       className="px-5 py-2 border border-green-200 bg-green-100 rounded mb-0 focus:outline-none focus:border-green-600"
//       type="email"
//       {...register("email", { required: true })}
//       aria-invalid={errors.email ? "true" : "false"}
//     />
//     {errors.email?.type === "required" && (
//       <p className="text-red-500 text-sm">El campo es requerido</p>
//     )}


//     <label htmlFor="email" className='mt-4 mb-2'>Contraseña</label>
//     <input
//       className="px-5 py-2 border border-green-200 bg-green-100 rounded mb-1 focus:outline-none focus:border-green-600"
//       type="password"
//       {...register("password", { required: true })}
//       aria-invalid={errors.email ? "true" : "false"}
//     />
//     {errors.email?.type === "required" && (
//       <p className="text-red-500 text-sm">El campo es requerido</p>
//     )}


//     <button

//       className="btn-primary">
//       Ingresar
//     </button>

//   </form>


//   {/* divisor l ine */}
//   <div className="flex items-center my-5">
//     <div className="flex-1 border-t border-green-500"></div>
//     <div className="px-2 text-green-800">O</div>
//     <div className="flex-1 border-t border-green-500"></div>
//   </div>

//   <Link
//     href="/auth/new-account"
//     className="btn-secondary text-center">
//     Crear una nueva cuenta
//   </Link>

// </div>
// </div>