'use client';

import { useEffect, useState } from "react";
import { getCertificationsByUserId } from "@/api";
import { Certification } from "@/interfaces";
import { CardCertificationUI } from "@/components";


export default function Profesor() {

  const [certificationData, setCertificationData] = useState<Certification[]>([]);
  const [loadData, setLoadData] = useState(false);

  const loadCertifications = async () => {

    try {
      const res = await getCertificationsByUserId();
      setCertificationData(res.data.certifications);
      // console.log(res.data.certifications)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    loadCertifications();
  }, [loadData]);



  return (
    <div
      // className="grid grid-cols-3 gap-4"
      className="cards"
    >

      {
        certificationData.map(certification =>
          <CardCertificationUI
            key={certification.uid}
            certification={certification}
            loadData={loadData}
            setLoadData={setLoadData}
          />
        )
      }
    </div>
  )
}
