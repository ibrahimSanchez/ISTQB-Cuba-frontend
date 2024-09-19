'use client';

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postCertification } from "@/api";
import { Certification, DataModal } from "@/interfaces";
import { CertificationForm, ModalAnswer } from "@/components"




export default function Page() {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset
  } = useForm<Certification>();


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


  const onSubmit: SubmitHandler<Certification> = async (data) => {

    try {
      const res = await postCertification(data);
      // console.log(res);

      const msgModal: DataModal = {
        title: 'Añadir Certificación',
        text: res.data.msg
      }
      setDataModal(msgModal)
      toggleModal();
      reset()
    } catch (error: any) {
      setIsError(true);
      const msgModal: DataModal = {
        title: 'Añadir Certificación',
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
          className="space-y-4 flex justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >

          <CertificationForm
            errors={errors}
            register={register}
            isUpdate={false}
          />

        </form>

    </>
  )
}
