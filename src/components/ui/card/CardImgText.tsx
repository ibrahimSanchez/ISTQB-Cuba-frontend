import Image from "next/image"
import Link from "next/link";

interface Props {
    img: string;
    title: string;
    text: string;
    textLink: string;
}

export const CardImgText = ({ title, text, textLink, img }: Props) => {
    return (

        <div className="p-5 flex flex-col justify-between items-center max-w-sm bg-[--card] border border-[--secondary] rounded-lg shadow m-6 py-4 cardAnimate">

            <div className="flex justify-center mb-5">
                <Image
                    className="rounded-t-lg"
                    src={`/images/${img}`}
                    alt='img'
                    width={100}
                    height={100}
                />
            </div>

            {/* <div className="p-5"> */}
            <h5 className="mb-4 text-xl font-semibold tracking-tight text-[--text_color]">
                {title}
            </h5>
            <p className="mb-5 font-normal text-[--text_secondary_color]">
                {text}
            </p>

            <Link href={`${textLink}`} className="inline-flex font-medium items-center text-[--text_secondary_color] underline">
                Leer más
            </Link>

            {/* </div> */}
        </div>
    )
}
