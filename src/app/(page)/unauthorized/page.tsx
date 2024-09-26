import Link from "next/link";
import { IoSettings } from "react-icons/io5";


export default function Home() {

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      
        <IoSettings
          className="text-[--primary] animate-rotate "
          size={200}
        />

      <h2 className="subTitle my-8 text-center">Lo siento, no tiene acceso a la página solicitada.</h2>
      <p className="text-[--text_color]">
        Click <Link
          href='/'
          className="text-[#484cd1] underline hover:text-[#191d97]">
          aquí
        </Link> para ir a la página de inicio.
      </p>

    </div>
  );
}
