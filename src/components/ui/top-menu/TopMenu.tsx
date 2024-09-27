'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OptionUser } from "./OptionUser";


export const TopMenu = () => {

    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
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
                        className={`${pathname === "/about" ? "active" : ""}`}
                        href="/about">Sobre Nosotros
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === "/certifications" ? "active" : ""}`}
                        href="/certifications">Certificaciones
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === "/workWithUs" ? "active" : ""}`}
                        href="/workWithUs">Trabaja con nosotros
                    </Link>
                </li>
                <li>
                    <input type="text" placeholder="¿Qué desea buscar?" className="search-bar" />
                </li>
                <li>
                    <Link
                        className={`${pathname === "/aa" ? "active" : ""}`}
                        href="#news">Noticias
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === "/SCR" ? "active" : ""}`}
                        href="/SCR">SCR
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === "/aa" ? "active" : ""}`}
                        href="#glossary">Glosario
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === "/aa" ? "active" : ""}`}
                        href="#help">Ayuda
                    </Link>
                </li>
            </ul>

            <div >
                <OptionUser />
            </div>

        </nav>
    )
}


