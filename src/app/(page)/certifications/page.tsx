'use client';

import { useEffect, useState } from "react";
import { SectionCertification, } from "@/components";
import { getCategories, getCertification } from "@/api";

type Category = {
  uid: string;
  category: string;
}


export default function Certifications() {

  const [certificationData, setCertificationData] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const loadCertifications = async () => {

    try {
      const res = await getCertification();
      setCertificationData(res.data.certifications);
      // console.log(res.data.certifications)
    } catch (error) {
      console.log(error);
    }
  }

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data.categories)
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    loadCategories();
    loadCertifications();
  }, []);

  return (
    <div className="px-8 sm:px-14">

      <h1 className="title mb-2">Nuestras certificaciones</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>

      <div className="mb-16">

        <p className="leading-7 text-[--text_color] mb-6">
          Ya sea que sea nuevo o ya esté establecido en la profesión de las pruebas, la certificación ISTQB ®
          lo respaldará a lo largo de su carrera. Para los empleadores, el esquema de Probador Certificado
          ISTQB ® lo ayudará a desarrollar y validar las habilidades de su equipo y respaldará el reclutamiento.
          Las certificaciones ISTQB ® ofrecen a los proveedores de capacitación múltiples oportunidades para
          ampliar sus carteras de cursos de capacitación. Haga clic en cada certificación para obtener más información.
        </p>

      </div>

      {
        certificationData.length === 0 ?
          <p className="underline">No hay certificaciones que mostrar</p> :
          categories.map(({ category, uid }) =>
            <SectionCertification
              key={uid}
              level={category}
              certifications={certificationData}
            />
          )
      }

    </div>
  )
}
