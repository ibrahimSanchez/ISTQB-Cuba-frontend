import Image from "next/image";
import Link from "next/link";
import { IoSettings } from "react-icons/io5";


export default function Home() {

  return (
    // <div className="flex justify-center items-center h-screen flex-col">

    //   {/* <IoSettings
    //       className="text-[--primary] animate-rotate "
    //       size={200}
    //     /> */}



    //   <h2 className="subTitle my-8 text-center">Lo siento, no tiene acceso a la página solicitada.</h2>
    //   <p className="text-[--text_color]">
    //     Click <Link
    //       href='/'
    //       className="text-[#484cd1] underline hover:text-[#191d97]">
    //       aquí
    //     </Link> para ir a la página de inicio.
    //   </p>

    // </div>


    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        {/* <h2 className="antialiased text-[--primary] text-9xl">401</h2> */}
        <p className="font-semibold text-[--text_color] text-xl mt-5">Lo siento, no tiene acceso a la página solicitada.</p>
        <p
          className="font-light"
        >
          <span className="text-[--text_color]">Puedes regresar al </span>
          <Link
            className="font-normal hover:underline transition-all text-blue-400"
            href='/'
          >
            inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/images/Unauthorized.png"
          alt="imgErrors"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>

    </div>


  );
}
