import { SectionCertification } from "@/components";
import { certificationData } from "@/data/certification";
import Link from "next/link";




export default function Certifications() {


  return (
    <div className="mt-28 sm:px-14">

      <h1 className="title mb-2">Nuestras Certificaciones</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>



      <div className="mb-16">

        <p className="leading-7 text-gray-300 mb-6">
          Ya sea que sea nuevo o ya esté establecido en la profesión de las pruebas, la certificación ISTQB ®
          lo respaldará a lo largo de su carrera. Para los empleadores, el esquema de Probador Certificado
          ISTQB ® lo ayudará a desarrollar y validar las habilidades de su equipo y respaldará el reclutamiento.
          Las certificaciones ISTQB ® ofrecen a los proveedores de capacitación múltiples oportunidades para
          ampliar sus carteras de cursos de capacitación. Haga clic en cada certificación para obtener más información.
        </p>

        <Link
          className="underline text-gray-500 text-xs"
          href="#"
        >
          Eche un vistazo al esquema de Probador Certificado y explore qué certificaciones respaldarán su carrera
          o su organización.
        </Link>

      </div>


      <SectionCertification
        category="Fundación central"
        certifications={certificationData}
      />


      <SectionCertification
        category="Núcleo Avanzado"
        certifications={certificationData}
      />



      <SectionCertification
        category="Especialista"
        certifications={certificationData}
      />



      <SectionCertification
        category="Ágil"
        certifications={certificationData}
      />



      <h4 className="text-xl font-bold text-[#053b5e]">
        Nivel experto
      </h4>

      <SectionCertification
        category="Mejorando el proceso de prueba"
        certifications={certificationData}
      />



      <h4 className="text-xl font-bold text-[#053b5e]">
        Nivel experto
      </h4>

      <SectionCertification
        category="Gestión de pruebas"
        certifications={certificationData}
      />



    </div>
  )
}
