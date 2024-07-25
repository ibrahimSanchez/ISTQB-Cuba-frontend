'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { IoSearchOutline } from "react-icons/io5";


export const TopMenu = () => {


    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* <img src="/path/to/logo.png" alt="ISTQB Logo" /> */}

                <Link href='/'>
                    <Image
                        alt="Logo"
                        width={70}
                        height={70}
                        src="/logo.jpg"
                    />
                </Link>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link
                        className={`${pathname == "/about" ? "active" : ""}`}
                        href="/about">Sobre Nosotros
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname == "/certifications" ? "active" : ""}`}
                        href="/certifications">Certificaciones
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${(pathname == "/training/examProvided" || pathname == "/training/trainedProvided") ? "active" : ""}`}
                        href="/training/trainedProvided">Capacitación y Exámenes
                    </Link>
                </li>
                <li>
                    <input type="text" placeholder="¿Qué desea buscar?" className="navbar-search" />
                </li>
                <li>
                    <Link
                        className={`${pathname == "/aa" ? "active" : ""}`}
                        href="#news">Noticias
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname == "/aa" ? "active" : ""}`}
                        href="#scr">SCR
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname == "/aa" ? "active" : ""}`}
                        href="#glossary">Glosario
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname == "/aa" ? "active" : ""}`}
                        href="#help">Ayuda
                    </Link>
                </li>
            </ul>
        </nav>
    )
}






// <button
//     className="m-2 p-2 rounded-md transition-all hover:bg-blue-500 hover:text-red"
//     onClick={openSideMenu}
// >
//     <IoMenuOutline className="w-5 h-5" />
// </button>



        // <nav className="shadow flex px-10 justify-between text-sm items-center w-full border p-5 fixed bg-white">

        //     {/* Logo */}
        //     <div className="mx-4">
        //         <Link href='/'>
        //             <Image
        //                 alt="Logo"
        //                 width={70}
        //                 height={70}
        //                 src="/logo.jpg"
        //             />
        //         </Link>
        //     </div>
        //     <div className="flex">


        //         <Link
        //             className={`mx-4 hover:text-blue-950 transition 
        // className={}
        //             href='/about'>
        //             Sobre nosotros
        //         </Link>

        //         <Link
        //             className={`mx-4 hover:text-blue-950 transition 
        //             ${pathname == "/certifications" ? "active" : ""}`}
        //             href='/certifications'>
        //             Certificaciones
        //         </Link>

        //         <Link
        //             className={`mx-4 hover:text-blue-950 transition 
        //             ${(pathname == "/training/examProvided" || pathname == "/training/trainedProvided") ? "active" : ""}`}
        //             href='/training/trainedProvided'
        //             >
        //             Entrenamiento y exámenes 
        //         </Link>


        //     </div>

        //     <div className="flex">

        //         {/* input search */}
        //         <div className="relative mx-4">
        //             <IoSearchOutline
        //                 size={20}
        //                 className="absolute top-1 left-2 cursor-pointer"
        //             />
        //             <input
        //                 type="text"
        //                 placeholder="¿Qué te gustaría buscar?"
        //                 className="rounded-2xl pl-8 py-1 pr-10 border text-sm border-blue-950 focus:outline-none"
        //             />
        //         </div>


        //         <Link
        //             className="mx-4  text-gray-500 hover:underline transition"
        //             href='/'>
        //             Noticias
        //         </Link>

        //         <Link
        //             className="mx-4 text-gray-500 hover:underline transition"
        //             href='/'>
        //             RCS
        //         </Link>

        //         <Link
        //             className="mx-4 text-gray-500 hover:underline transition"
        //             href='/'>
        //             Glosario
        //         </Link>

        //         <Link
        //             className="mx-4 text-gray-500 hover:underline transition"
        //             href='/'>
        //             Ayuda
        //         </Link>

        //     </div>
        // </nav>