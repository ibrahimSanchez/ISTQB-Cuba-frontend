import Image from "next/image"
import Link from "next/link"




export const PageNotFound = () => {
    return (
        <div
            className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle"
        >

            <div className="text-center px-5 mx-5">
                {/* <h2 className="antialiased text-[--primary] text-9xl">404</h2> */}
                <p className="font-semibold text-[--text_color] text-xl mt-5">Lo sentimos mucho</p>
                <p
                    className="font-light"
                >
                    <span className="text-[--text_color]">Puedes regresar al </span>
                    <Link
                        className="font-normal hover:underline transition-all text-blue-400"
                        href='/'
                    >
                        inicio
                    </Link>
                </p>
            </div>


            <div className="px-5 mx-5">
                <Image
                    src="/images/notFound.png"
                    alt="imgErrors"
                    className="p-5 sm:p-0"
                    width={550}
                    height={550}
                />
            </div>

        </div>
    )
}
