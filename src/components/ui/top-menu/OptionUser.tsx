'use client';

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IoIosLogIn, IoIosLogOut, IoIosNotifications } from "react-icons/io"
import { IoPerson } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa";
import { AuthContext } from "@/context";
import { authTypes } from "@/types";





export const OptionUser = () => {

  const router = useRouter();

  const { userAuth, dispatch } = useContext(AuthContext);


  const logOut = () => {
    handleClose();
    dispatch({ type: authTypes.logout })
    router.push('/');
  }


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Opciones de usuario">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <IoPerson
              size={40}
              className="p-3 text-white cursor-pointer hover:bg-[#3a3a3a] active:bg-[#3a3a3a] active:text-white rounded-xl"
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              background: '#1e1e1e',
              color: '#fff',
              padding: '0 10px',
              border: '1px solid #2a2a2a',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                background: '#1e1e1e',
                border: '1px solid #2a2a2a',
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          !userAuth?.logged && (
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
          userAuth?.logged && (
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

              <Link
                href="/profesor"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                role="menuitem"
              >
                <FaChalkboardTeacher
                  size={35}
                  className="p-2 text-white cursor-pointer"
                />
                Soy profesor
              </Link>

              <Link

                href="/admin/manageUsers"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                role="menuitem"
              >
                <IoPerson
                  size={35}
                  className="p-2 text-white cursor-pointer"
                />
                Panel de administrador
              </Link>


              {/* <Link
                href={`/profile/${userId}`}
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] hover:text-gray-300"
                role="menuitem"
              >
                <IoPerson
                  size={35}
                  className="p-2 text-white cursor-pointer"
                />
                Perfil
              </Link> */}
            </div>
          )}

      </Menu >
    </>
  );
}
