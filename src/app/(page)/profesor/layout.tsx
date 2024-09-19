"use client";

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaHome, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { IconButton, Tooltip } from '@mui/material';
import { MdManageAccounts } from 'react-icons/md';

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (

    <>
      <section className="main-h-screen mt-16 px-8 sm:px-14 mb-12">
        <div className='sm:flex justify-between'>
          <h1 className="text-3xl font-bold mb-6 title">Administración de Certificaciones</h1>

          <div className="sm:flex space-x-4 mb-2 text-center">

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
                    className='gradient-card w-8 h-8 p-2 rounded-full text-white'
                  />
                </Link>
              </IconButton>
            </Tooltip>

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
                    className='gradient-card w-8 h-8 p-2 rounded-full text-white'
                  />

                </Link>
              </IconButton>
            </Tooltip>

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
                    className='gradient-card w-8 h-8 p-2 rounded-full text-white'
                  />
                </Link>
              </IconButton>
            </Tooltip>

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
