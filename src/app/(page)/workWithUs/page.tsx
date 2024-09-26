import { JobApplicationForm } from "@/components";


export default function Page() {

    return (
        <section className="main-h-screen px-8 sm:px-14">

            <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-8">

                <h2 className="title">Trabaja con nosotros</h2>
                {/* line separator */}
                <div className="w-full h-1 bg-blue-950 mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="subTitle">Cómo funciona</h3>
                        <p className="text-[--text_color] my-6">
                            En nuestra empresa, valoramos el talento y la dedicación. Si estás buscando una oportunidad para desarrollar tus habilidades y formar parte de un equipo dinámico, ¡esta es tu chance! Sigue los pasos a continuación para unirte a nuestro equipo.
                        </p>
                        <ol className="list-decimal pl-6 text-[--text_color]">
                            <li className="mb-2">Completa el formulario de solicitud a continuación con tus datos y experiencia.</li>
                            <li className="mb-2">Nuestro equipo de recursos humanos revisará tu aplicación y se pondrá en contacto contigo para programar una entrevista.</li>
                            <li className="mb-2">Si tu perfil es un buen ajuste, te haremos una oferta de empleo que podrás considerar.</li>
                        </ol>
                    </div>
                    <div className="p-6 pt-2 rounded-sm shadow-xl hover:shadow-2xl transition-all">
                        <h3 className="subTitle mb-6">Solicitud de empleo</h3>

                        <JobApplicationForm />

                    </div>
                </div>
            </div>

        </section>

    )
}
