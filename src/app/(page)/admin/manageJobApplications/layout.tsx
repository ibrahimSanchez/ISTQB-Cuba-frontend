'use client';

import { useEffect, useState } from "react";
import { getJobApplications } from "@/api";
import { JobApplicationsContext } from "@/context";
import { JobApplication } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [loadJobApplicationData, setLoadJobApplicationData] = useState(false);

  const value = { jobApplications, loadJobApplicationData, setLoadJobApplicationData };

  useEffect(() => {

    const loadJobApplication = async () => {
      try {
        const res = await getJobApplications();
        const data = res.data.jobApplications;
        setJobApplications(data);

      } catch (error) {
        console.log(error)
      }
    };

    loadJobApplication();

  }, [loadJobApplicationData]);

  const pathname = usePathname();

  return (

    <JobApplicationsContext.Provider value={value}>
      <>
        <div className="space-x-4 mb-10 text-end">
          <Link href="/admin/manageJobApplications" className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/admin/manageJobApplications'
              }
            )
          }>
            Todas
          </Link>

          <Link href='/admin/manageJobApplications/approved' className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/admin/manageJobApplications/approved'
              }
            )
          }>
            Aprobadas
          </Link>

          <Link href='/admin/manageJobApplications/earrings' className={
            clsx(
              "btnLink",
              {
                "btnLinkActive": pathname === '/admin/manageJobApplications/earrings'
              }
            )
          }>
            Pendientes
          </Link>
        </div>

        <div>
          {children}
        </div>
      </>
    </JobApplicationsContext.Provider >

  );
}
