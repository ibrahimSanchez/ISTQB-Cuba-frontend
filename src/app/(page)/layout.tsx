'use client';

import { useEffect, useReducer } from "react";
import { authReducer } from "@/reducer/authReducer";
import { getCookie, setCookie } from "@/helper";
import { AuthContext } from "@/context";
import { Footer } from "@/components";
import { isExpired } from "react-jwt";
import TopMenuUI from "@/components/ui/top-menu/TopMenuUI";
import { Box, Toolbar } from "@mui/material";



const init = () => {
  const userAuth = getCookie('USER_AUTH');
  if (userAuth) {
    const expiredToken = isExpired(JSON.parse(userAuth).tokenAccess);
    if (!expiredToken) return JSON.parse(userAuth);
  }

  else return { logged: false, tokenAccess: '', role: '' };
}



export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {


  const [userAuth, dispatch] = useReducer(authReducer, {}, init)


  useEffect(() => {
    if (!userAuth) return;

    setCookie('USER_AUTH', JSON.stringify(userAuth));
  }, [userAuth]);


  return (
    <AuthContext.Provider value={{
      userAuth,
      dispatch
    }}>
      <main>

        {/* <Box sx={{ display: 'flex' }}> */}

          <TopMenuUI />
          <Toolbar />

          <div className="px-0 pt-3 min-h-screen w-full">
            {children}
          </div>

        {/* </Box> */}

        <Footer />

      </main>
    </AuthContext.Provider>
  );
}
