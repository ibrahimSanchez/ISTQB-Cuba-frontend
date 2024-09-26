import { CardImgText, CardText } from "@/components";
import { Button } from "@mui/material";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <section className="welcome-section">
        <div className="welcome-content">
          <h2 className="title">Bienvenido a ISTQB®</h2>
          <p>
            ISTQB® es el esquema líder de certificación global en el campo de las pruebas de software.
            Hasta junio de 2023, ISTQB® ha administrado 1,3 millones de exámenes y emitido más de 957k certificaciones en más de 130 países. Con su extensa red de Proveedores de Capacitación Acreditados, Juntas de Miembros y Proveedores de Exámenes, ISTQB® es uno de los esquemas de certificación profesional neutrales en proveedor más grandes y establecidos del mundo.
          </p>
          <p>
            El vocabulario de ISTQB® es reconocido en la industria como el lenguaje por defecto en el campo de las pruebas de software y conecta a profesionales en todo el mundo.
          </p>
          <div className="welcome-buttons block md:flex md:justify-between">
            <Link href="/certifications">
              <Button 
                className="btn-primary btn-animate">
                Nuestras certificaciones
              </Button>
            </Link>

            <Link href="/workWithUs">
              <Button className="btn-secondary btn-animate">
                Trabaja con nosotros
              </Button>
            </Link>

          </div>
        </div>
      </section >


      {/* Section 2 */}
      <section className="build-skills-section" >
        <div className="container">
          <h2 className="title">Desarrolle sus habilidades de prueba</h2>

          <div className="cards">

            <CardText
              title="Encuentre una certificación"
              text="Explore información clave y descargue programas de estudios y exámenes de muestra en nuestra base de conocimientos gratuita"
              link="/certifications"
              textLink="Nuestras certificaciones"
            />
{/* 
            <CardText
              title="Encuentre formación acreditada"
              text="Elija entre más de 300 proveedores de formación acreditados líderes en todo el mundo"
              link="/training/trainedProvided"
              textLink="Proveedores de formación acreditados"
            /> */}

            <CardText
              title="Encontrar un examen"
              text="Identifique proveedores de exámenes en su área que ofrezcan el examen de certificación seleccionado"
              link="/training/examProvided"
              textLink="Proveedores de exámenes"
            />

            <CardText
              title="Consulte el Registro de candidatos exitosos (SCR)"
              text="Explore la lista de personas certificadas"
              link="/scr"
              textLink="Nuestra SCR"
            />

          </div>
        </div>
      </section>


      {/* Section 3 */}

      <section className="py-20 sm:px-14 flex flex-col text-center section" id="workWithUs" >

        <h2 className="title mb-6">
          Trabaja con nosotros y participa
        </h2>

        <p className="leading-8 text-[--text_color] p-[1rem]">
          Hay varias oportunidades interesantes para que las organizaciones y las personas contribuyan al ISTQB®.
          Somos una comunidad colaborativa que trabaja junta en todo el mundo para lograr una visión común.
          Nuestros socios y contribuyentes demuestran un compromiso con la calidad y una pasión por las pruebas
          de software. ¡Descubra más y únase a nosotros!
        </p>

        <div className="cards">

          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase a nuestro programa de socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />

        </div>
      </section>

    </>
  );
}
