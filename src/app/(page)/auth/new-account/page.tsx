'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { newAccount } from '@/api';
import { CreateAccountUserForm, ModalAnswer } from '@/components';
import { DataModal, User } from '@/interfaces';



export default function Page() {

  const router = useRouter();

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


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()
  const onSubmit: SubmitHandler<User> = async (data) => {
    // todo hay q ver como manejar el asignar roles (esta x defecto el de usuario)
    data.role = 'USER_ROLE';

    try {
      const res = await newAccount(data);
      // console.log('has submit', res);
      // setIsError(true);

      const msgModal: DataModal = {
        title: 'Crear cuenta',
        text: res.data.msg
      }
      setDataModal(msgModal)
      toggleModal();

    } catch (error: any) {
      setIsError(true);
      const msgModal: DataModal = {
        title: 'Crear cuenta',
        text: error.response.data.errors[0].msg
      }
      setDataModal(msgModal)
      toggleModal();
      console.log(error.response.data.errors[0].msg);
    }

  }


  useEffect(() => {
    if (isRedirect) router.push('/auth/login');
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
      <div className="flex flex-col min-h-screen pt-16 sm:pt-32">


        <h1 className="text-4xl mb-5">Nueva cuenta</h1>

        <div className="flex flex-col">

          <form
            name='login'
            className='flex flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            <CreateAccountUserForm
              errors={errors}
              register={register}
              isUpdate={false}
            />

          </form>

          {/* divisor l ine */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-blue-500"></div>
            <div className="px-2 text-blue-800">O</div>
            <div className="flex-1 border-t border-blue-500"></div>
          </div>


          <Link
            href="/auth/login"
          >
            <Button variant="outlined" size='large' className='w-full'>
              Ingresar
            </Button>
          </Link>

        </div>
      </div>
    </>

  );

}