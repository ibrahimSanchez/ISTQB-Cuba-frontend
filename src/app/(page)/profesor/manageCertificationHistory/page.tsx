"use client"

import { useState, useEffect } from 'react';
import { getCertification, getUser_certification, getUsers } from '@/api';
import { Certification, FilterCriteria, User, User_certification } from '@/interfaces';
import { FilterData, User_certificationTable } from "@/components";


export default function Page() {

  const [user_certifications, setUser_certifications] = useState<User_certification[]>([]);
  const [dataToShow, setDataToShow] = useState<User_certification[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loadUser_certificationsData, setLoadUser_certificationsData] = useState(false);


  useEffect(() => {

    const loadUser_certifications = async () => {
      try {
        const res = await getUser_certification();
        const data = res.data.user_certifications;
        setDataToShow(data);
        setUser_certifications(data);
        // console.log(res) 

      } catch (error) {
        console.log(error)
      }
    };





    const loadUser = async () => {
      try {
        const res = await getUsers();
        const data = res.data.users;
        setUsers(data);
        // console.log(data)

      } catch (error) {
        console.log(error)
      }
    };


    const loadCertification = async () => {
      try {
        const res = await getCertification();
        const data = res.data.certifications;
        setCertifications(data);
        // console.log(data)

      } catch (error) {
        console.log(error)
      }
    };

    loadCertification();
    loadUser();
    loadUser_certifications();
    // console.log(reservations)
  }, [loadUser_certificationsData]);


  const criteria: FilterCriteria[] = [{
    name: 'Completadas',
    value: true
  },
  {
    name: 'Pendiente',
    value: false
  },
  ];


  return (
    <>

      <FilterData
        allData={user_certifications}
        setDataToShow={setDataToShow}
        filterCriteria={criteria}
      />


      <User_certificationTable
        loadUser_certificationsData={loadUser_certificationsData}
        setLoadUser_certificationsData={setLoadUser_certificationsData}
        user_certifications={dataToShow}
        users={users}
        certifications={certifications}
      />


    </>

  )
}
