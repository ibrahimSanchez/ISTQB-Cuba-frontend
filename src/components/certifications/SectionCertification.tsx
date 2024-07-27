import { Certification } from "@/interfaces";
import { CardCertifications } from "../ui/card/CardCertifications"

interface Props {
    category: string;
    certifications: Certification[];
}



export const SectionCertification = ({ category, certifications }: Props) => {
    return (
        <section id="esquema" className="mb-16">

            <h4 className="text-xl font-bold subTitle ">
                {category}
            </h4>

            <div className="flex justify-evenly overflow-auto">

                {
                    certifications.map(({ level, text, textLink, title }, i) => (
                        <CardCertifications
                            key={title + i + level}
                            level={level}
                            text={text}
                            textLink={textLink}
                            title={title}
                        />
                    ))
                }

            </div>

        </section>
    )
}
