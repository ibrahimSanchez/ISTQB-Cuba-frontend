import { Button } from "@mui/material";
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
                <Link href={link}>
                    <Button
                        className="btn-secondary p-3 rounded-3xl">
                        {textLink}
                    </Button>
                </Link>
            </div>
        </div>
    )
}
