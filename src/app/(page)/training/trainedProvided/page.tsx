import Link from "next/link";





export default function TrainedProvided() {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="subTitle mb-2">Encuentre proveedores de capacitación</h1>
                <Link
                    className='hover:text-blue-800 transition content-end mb-3'
                    href='/training/examProvided'>
                   Encuentre un proveedor de exámenes
                </Link>
            </div>
            {/* line separator */}
            <div className="w-full h-px bg-blue-950 mb-7" />

            <p className="text-sm text-gray-600 my-7">
                Encuentre cualquiera de los muchos proveedores de capacitación acreditados por ISTQB® en todo el mundo
            </p>


            {/* line separator */}
            {/* <div className="w-full h-px bg-blue-950 mb-7" /> */}


        </>
    )
}
