"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconButton, Tooltip } from '@mui/material';
import { FaUsersCog } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <section className="mb-12 mt-8 px-8 sm:px-14">
      <div className='sm:flex justify-between'>
        <h1 className="text-3xl font-bold mb-6 title">
          {
            clsx({
              'Gestión de usuarios': pathname === '/admin/manageUsers',
              "Gestión de solicitudes de trabajo": (pathname === '/admin/manageJobApplications' ||
                pathname === '/admin/manageJobApplications/approved' ||
                pathname === '/admin/manageJobApplications/earrings'),
              "Modificar información de usuario": pathname.includes('/admin/manageUsers/updateUser/'),
              "Crear cuenta de usuario": pathname === '/admin/manageUsers/addUser',
              "Solicitud de trabajo": pathname.includes('/admin/manageJobApplications/jobApplication/')
            })
          }
        </h1>

        <div className="sm:flex space-x-4 mb-2 text-center">

          <Tooltip title="Gestionar Usuarios">
            <IconButton>
              <Link href="/admin/manageUsers" className={
                clsx(
                  "btnLink",
                  {
                    "btnLinkActive": pathname.includes('/admin/manageUsers')
                  }
                )
              }>
                <FaUsersCog
                  size={20}
                  className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Gestionar Solicitudes de Trabajo">
            <IconButton>
              <Link href="/admin/manageJobApplications" className={
                clsx(
                  "btnLink",
                  {
                    "btnLinkActive": pathname === '/admin/manageJobApplications'
                  }
                )
              }>
                <MdOutlineWork
                  size={20}
                  className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
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
  );
}
