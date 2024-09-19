

import Link from "next/link";



export default function ExamProvided() {

    return (
        <>

            <div className="flex justify-between">
                <h1 className="subTitle mb-2">Encuentre un proveedor de exámenes</h1>
                <Link
                    className='hover:text-blue-800 transition content-end mb-3'
                    href='/training/trainedProvided'>
                    Encuentre un proveedor de capacitación
                </Link>
            </div>
            {/* line separator */}
            <div className="w-full h-px bg-blue-950 mb-7" />

            <p className="text-sm text-gray-600 my-7">
                Los exámenes ISTQB® se ofrecen a través de proveedores de exámenes externos y juntas de miembros que actúan como proveedores de exámenes. Un proveedor de exámenes es una organización autorizada por una junta miembro para ofrecer exámenes a nivel local e internacional. Para mostrar la lista de todos los proveedores de exámenes disponibles, haga clic en {"Buscar"}.
            </p>




            {/* line separator */}
            {/* <div className="w-full h-px bg-blue-950 mb-7" /> */}


        </>
    )
}
