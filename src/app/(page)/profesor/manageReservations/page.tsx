"use client"

import { useState, useEffect } from 'react';
import { getCertification, getReservations, getUsers } from '@/api';
import { Certification, FilterCriteria, Reservation, User } from '@/interfaces';
import { FilterData, ReservationTable } from "@/components";


export default function Page() {

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [dataToShow, setDataToShow] = useState<Reservation[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loadReservationData, setLoadReservationData] = useState(false);


  useEffect(() => {

    const loadReservations = async () => {
      try {
        const res = await getReservations();
        const data = res.data.reservations;
        setDataToShow(data);
        setReservations(data);
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
    loadReservations();
    // console.log(reservations)
  }, [loadReservationData]);




  const criteria: FilterCriteria[] = [{
    name: 'Aprobada',
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
        allData={reservations}
        setDataToShow={setDataToShow}
        filterCriteria={criteria}
      />

      <ReservationTable
        loadReservationData={loadReservationData}
        setLoadReservationData={setLoadReservationData}
        reservations={dataToShow}
        users={users}
        certifications={certifications}
      />
    </>

  )
}
