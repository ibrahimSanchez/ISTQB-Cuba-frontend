"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isAuth } from "@/helper";



export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  useEffect(() => {
    if (!isAuth()) router.push("/");
  }, []);


  const pathname = usePathname();


  return (
    <section className="h-screen mt-28 sm:px-14 mb-28">
      <div className="px-0">
        {children}
      </div>
    </section>
  );
}
