"use client";

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaHome, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { IconButton, Tooltip } from '@mui/material';
import { MdHistoryEdu, MdManageAccounts } from 'react-icons/md';

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (

    <>
      <section className="main-h-screen mt-8 px-8 sm:px-14">
        <div className='sm:flex justify-between'>
          <h1 className="text-3xl font-bold mb-6 title">
            {
              clsx({
                "Administración de certificaciones": pathname === '/profesor',
                "Gestión de historial de certificaciones": pathname === '/profesor/manageCertificationHistory',
                "Añadir certificación": pathname === '/profesor/manageCertifications/addCertifications',
                "Gestión de reservaciones": pathname === '/profesor/manageReservations',
                "Modificar certificación": pathname.includes("/profesor/manageCertifications/updateCertification/")
              })
            }
          </h1>

          <div className="sm:flex space-x-1 mb-2 text-center">

            <div>
              <Tooltip title="Certificaciones">
                <IconButton>
                  <Link href="/profesor" className={
                    clsx(
                      "btnLink",
                      {
                        "btnLinkActive": pathname === '/profesor'
                      }
                    )
                  }>
                    <FaHome
                      size={20}
                      className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                    />
                  </Link>
                </IconButton>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Agregar Certificación">
                <IconButton>
                  <Link href="/profesor/manageCertifications/addCertifications" className={
                    clsx(
                      "btnLink",
                      {
                        "btnLinkActive": pathname === '/profesor/manageCertifications/addCertifications'
                      }
                    )
                  }>
                    <FaPlus
                      size={20}
                      className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                    />

                  </Link>
                </IconButton>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Gestionar Reservaciones">
                <IconButton>

                  <Link href="/profesor/manageReservations" className={
                    clsx(
                      "btnLink",
                      {
                        "btnLinkActive": pathname === '/profesor/manageReservations'
                      }
                    )
                  }>
                    <MdManageAccounts
                      size={30}
                      className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                    />
                  </Link>
                </IconButton>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Historial de certiicaciones">
                <IconButton>

                  <Link href="/profesor/manageCertificationHistory" className={
                    clsx(
                      "btnLink",
                      {
                        "btnLinkActive": pathname === '/profesor/manageCertificationHistory'
                      }
                    )
                  }>
                    <MdHistoryEdu
                      size={30}
                      className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                    />
                  </Link>
                </IconButton>
              </Tooltip>
            </div>

          </div>
        </div>

        {/* line separator */}
        <div className="w-full h-1 bg-blue-950 mb-5"></div>

        <div className="px-0">
          {children}
        </div>
      </section>
    </>

  );
}
