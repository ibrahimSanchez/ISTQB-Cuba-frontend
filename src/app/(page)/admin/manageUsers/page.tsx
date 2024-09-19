"use client"

import { useState, useEffect } from 'react';
import { getUsers } from '@/api';
import { Criteria, User } from '@/interfaces';
import { SearchBar, UserTable } from "@/components";


export default function Page() {

  const [users, setUsers] = useState<User[]>([]);
  const [loadUserData, setLoadUserData] = useState(false);

  const [dataToShow, setDataToShow] = useState<User[]>([]);

  const loadUser = async () => {
    try {
      const res = await getUsers();
      const data = res.data.users;
      setDataToShow(data);
      setUsers(data);
      // console.log(data)

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadUser();

  }, [loadUserData]);


  const criteria: Criteria[] = [{
    name: 'Nombre',
    value: 'name'
  },
  {
    name: 'Correo',
    value: 'email'
  }
  ];

  return (
    <>
      <div className='my-6'>
        <SearchBar
          allData={users}
          searchCriteria={criteria}
          setDataToShow={setDataToShow}
        />
      </div>

      <UserTable
        loadUserData={loadUserData}
        setLoadUserData={setLoadUserData}
        users={dataToShow}
      />
    </>

  )
}


