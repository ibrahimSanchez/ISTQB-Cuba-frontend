import Link from "next/link";

interface Props {
    title: string;
    text: string;
    textLink: string;
    link: string;
}


export const CardText = ({ title, text, textLink, link }: Props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={link} className="btn-primary">{textLink}</Link>
            </div>
        </div>
    )
}
