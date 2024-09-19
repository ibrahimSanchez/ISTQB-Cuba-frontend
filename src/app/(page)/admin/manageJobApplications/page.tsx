'use client'

import { useContext, useEffect, useState } from 'react';
import { JobNotificationUI, SearchBar } from '@/components';
import { JobApplicationsContext } from '@/context';
import { Criteria, JobApplication } from '@/interfaces';


export default function Notifications() {

  const {
    jobApplications,
    loadJobApplicationData,
    setLoadJobApplicationData
  } = useContext(JobApplicationsContext);

  const [dataToShow, setDataToShow] = useState<JobApplication[]>([]);



  useEffect(() => {
    setDataToShow(jobApplications)
  }, [jobApplications]);

  const criteria: Criteria[] = [{
    name: 'Nombre',
    value: 'nameUser'
  },
  {
    name: 'Correo',
    value: 'emailUser'
  },
  {
    name: 'Descripción',
    value: 'description'
  }
  ];

  return (
    <div>

      <div className='my-6'>
        <SearchBar
          allData={jobApplications}
          searchCriteria={criteria}
          setDataToShow={setDataToShow}
        />

      </div>

      {/* Listado de notificaciones */}
      {
        dataToShow.length > 0 ? (
          <div className="space-y-4">
            {dataToShow.map((jobApplication) => (
              <JobNotificationUI
                key={jobApplication.uid}
                jobApplication={jobApplication}
                loadJobApplicationData={loadJobApplicationData}
                setLoadJobApplicationData={setLoadJobApplicationData}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No hay solicitudes de trabajo.</p>
        )
      }

    </div >
  )
}
