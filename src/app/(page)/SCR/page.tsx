import { SCRGrid } from "@/components";
import Image from "next/image"

export default function CandidateRegistryPage() {
  return (
    <>
      <div className="px-8 sm:px-14">

        <h1 className="title mb-2">Registro de Candidatos Seleccionados</h1>
        {/* Separador */}
        <div className="w-full h-1 bg-blue-950 mb-8"></div>

        <div className="lg:flex items-start">

          <div className="min-w-[500px] mr-6 flex justify-center">

            <Image
              className=""
              src={`/images/search.png`}
              alt='img'
              width={500}
              height={100}
            />
          </div>

          <div className="mb-16">
            <p className="leading-7 mb-6">
              Para verificar un certificado, utilice la función de búsqueda a continuación. Los titulares de certificados que cumplan con los criterios de búsqueda aparecerán en la lista con un número de certificado anonimizado, en el que algunos dígitos se reemplazarán por <strong>***</strong>. Este proceso asegura que ISTQB® proteja el número de certificado contra un uso indebido, proporcionando al mismo tiempo suficiente información para verificarlo.
            </p>

            <p className="leading-7 mb-6">
              La inclusión en este registro es voluntaria, por lo que es posible que no todos los titulares de certificaciones estén incluidos. El registro se actualiza periódicamente, así que espere un tiempo antes de que sus datos aparezcan. Si tiene alguna duda, comuníquese con el emisor de su certificado.
            </p>

            <p className="leading-7 mb-6">
              Los titulares que obtuvieron una certificación ISTQB® antes de enero de 2017 pueden no estar incluidos. En tal caso, póngase en contacto con el organismo de certificación correspondiente para recibir información sobre cómo agregarse al registro. Tenga en cuenta que los términos y condiciones pueden variar según la Junta de Miembros o el proveedor de exámenes.
            </p>

            <p className="leading-7 mb-6">
              Si desea retirar o modificar su información del registro, por favor contacte a la Junta de Miembros o al Proveedor de Exámenes que emitió su certificado.
            </p>
          </div>
        </div>

      </div>


      <SCRGrid />
    </>

  );
}
