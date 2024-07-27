import { CardImgText, CardText } from "@/components";
// import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";




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
          <div className="welcome-buttons">
            <Link href="/certifications" className="btn-primary">Nuestras Certificaciones</Link>
            <Link href="/trabaja-con-nosotros" className="btn-secondary">Trabaja Con Nosotros</Link>
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





      {
        //TODO: Foto de los links DUDAAAAA
      }
      {/* Section 3 */}
      {/* <section className="pt-20 sm:px-14 bg-gray-100 flex flex-col text-center">

        <h2 className="subTitle mb-4">
          Mejora y certifica tus habilidades
        </h2>

        <p className="leading-10 text-gray-600 mb-8">
          Eche un vistazo a nuestra cartera de certificaciones y explore lo que respaldará su carrera en las pruebas.
        </p>
      </section> */}


      {/* Section 4 */}
      {
        //TODO: Poner foto de fondo
      }
      {/* <section className="py-24 sm:px-14 bg-blue-300 flex flex-col text-center">

        <h2 className="subTitle mb-10">
          Glosario ISTQB®
        </h2>


        <div className="relative">
          <input
            type="text"
            placeholder="Busca una definición de término"
            className="w-[80%] sm:w-[40%] mb-6 rounded-2xl pl-5 py-3 pr-10 text-sm border-blue-950 focus:outline-none"
          />
          <IoSearchOutline
            size={25}
            className="right-[11%] absolute top-2 sm:right-[31%] cursor-pointer"
          />

          <select className="bg-white hover:bg-blue-950 text-blue-950 hover:text-white py-3 px-4 rounded-3xl transition-all sm:absolute  sm:right-[15%]">
            <option value="idioma">idioma</option>
          </select>

        </div>


      </section>
 */}













      {/* Section 5 */}

      <section className="py-20 sm:px-14 flex flex-col text-center section" id="workWithUs" >

        <h2 className="subTitle mb-6">
          Trabaja Con Nosotros Y Participa
        </h2>

        <p className="leading-8 text-gray-300">
          Hay varias oportunidades interesantes para que las organizaciones y las personas contribuyan al ISTQB®.
          Somos una comunidad colaborativa que trabaja junta en todo el mundo para lograr una visión común.
          Nuestros socios y contribuyentes demuestran un compromiso con la calidad y una pasión por las pruebas
          de software. ¡Descubra más y únase a nosotros!
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">

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
