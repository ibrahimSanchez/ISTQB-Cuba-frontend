import { CardImgText, CardText } from "@/components";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Bienvenido a ISTQB®</h2>
          <p>
            ISTQB® es el esquema líder de certificación global en el campo de las pruebas de software.
            Hasta junio de 2023, ISTQB® ha administrado 1,3 millones de exámenes y emitido más de 957k certificaciones en más de 130 países. Con su extensa red de Proveedores de Capacitación Acreditados, Juntas de Miembros y Proveedores de Exámenes, ISTQB® es uno de los esquemas de certificación profesional neutrales en proveedor más grandes y establecidos del mundo.
          </p>
          <p>
            El vocabulario de ISTQB® es reconocido en la industria como el lenguaje por defecto en el campo de las pruebas de software y conecta a profesionales en todo el mundo.
          </p>
          <div className="welcome-buttons block md:flex md:justify-between">
            <Link href="/certifications" className="btn-primary m-3">Nuestras Certificaciones</Link>
            <Link href="/workWithUs" className="btn-secondary m-3">Trabaja Con Nosotros</Link>
          </div>
        </div>
      </section >


      {/* Section 2 */}
      <section className="build-skills-section" >
        <div className="container">
          <h2 className="section-title">Build Your Testing Skills</h2>

          <div className="cards">

            <CardText
              title="Find a Certification"
              text="Explore key information and download syllabi and sample exams in our free knowledge base"
              link="/certifications"
              textLink="Our certifications"
            />

            <CardText
              title="Find Accredited Training"
              text="Choose from more than 300 leading accredited training providers around the world"
              link="/training/trainedProvided"
              textLink="Accredited training providers"
            />

            <CardText
              title="Find an Exam"
              text="Identify exam providers in your area who offer your selected certification exam"
              link="/training/examProvided"
              textLink="Exam providers"
            />

            <CardText
              title="Check out the Successful Candidate Register (SCR)"
              text="Browse the list of certified individuals"
              link="/scr"
              textLink="Our SCR"
            />

          </div>
        </div>
      </section>


      {/* Section 3 */}

      <section className="py-20 sm:px-14 flex flex-col text-center section" id="workWithUs" >

        <h2 className="subTitle mb-6">
          Trabaja Con Nosotros Y Participa
        </h2>

        <p className="leading-8 text-gray-300 p-[1rem]">
          Hay varias oportunidades interesantes para que las organizaciones y las personas contribuyan al ISTQB®.
          Somos una comunidad colaborativa que trabaja junta en todo el mundo para lograr una visión común.
          Nuestros socios y contribuyentes demuestran un compromiso con la calidad y una pasión por las pruebas
          de software. ¡Descubra más y únase a nosotros!
        </p>

        <div className="cards">

          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />


        </div>

      </section >






    </>

  );
}
