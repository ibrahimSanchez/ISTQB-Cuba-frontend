'use client'

import { isAuth, removeCookie } from "@/helper/manageCookie";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosLogIn, IoIosLogOut, IoIosNotifications } from "react-icons/io"
import { IoPerson } from "react-icons/io5"





export const OptionUser = () => {

    const router = useRouter();

    const [showUserMenu, setShowUserMenu] = useState(false);

    const [isUserAuth, setIsUserAuth] = useState(false);

    const logOut = () => {
        setShowUserMenu(false);
        removeCookie('AUTH_TOKEN_KEY');
        setIsUserAuth(isAuth());
        router.push('/');
    }

    useEffect(() => {
        setIsUserAuth(isAuth());
    }, []);


    return (
        <div className="relative inline-block text-left bg-[#1e1e1e] rounded-xl">
            <div>
                <IoPerson
                    onClick={() => {
                        setShowUserMenu(!showUserMenu);
                    }}
                    size={35}
                    className="p-2 text-white cursor-pointer hover:bg-[#3a3a3a] active:bg-[#3a3a3a] active:text-white rounded-xl"
                />
            </div>

            {
                showUserMenu && (

                    <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1 bg-[#1e1e1e]" role="none">
                            {
                                !isUserAuth && (
                                    <Link
                                        href="/auth/login"
                                        className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                                        role="menuitem"
                                    >
                                        <IoIosLogIn
                                            size={35}
                                            className="p-2 text-white cursor-pointer"
                                        />
                                        Iniciar sesión
                                    </Link>
                                )
                            }

                            {
                                isUserAuth && (
                                    <div>
                                        <div
                                            onClick={() => logOut()}
                                            className="cursor-pointer select-none flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                                            role="menuitem"
                                        >
                                            <IoIosLogOut
                                                size={35}
                                                className="p-2 text-white cursor-pointer"
                                            />
                                            Cerrar sesión
                                        </div>
                                        <Link
                                            onClick={() => {
                                                setShowUserMenu(false);
                                            }}
                                            href="/notifications"
                                            className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                                            role="menuitem"
                                        >
                                            <IoIosNotifications
                                                size={35}
                                                className="p-2 text-white cursor-pointer"
                                            />
                                            Notificaciones
                                        </Link>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                )
            }

        </div>
    )
}
