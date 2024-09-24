import Link from "next/link";

export default function About() {
  return (
    <div className="mt-16 px-8 sm:px-14">

      <h1 className="title mb-2">Sobre nosotros</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>


      <div className="my-8 flex flex-col">

        <Link href="#esquema" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
          Esquema de probador certificado
        </Link>

        <Link href="#programas" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
          Programas de participación
        </Link>

        <Link href="#codigoEtico" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
          Código ético
        </Link>

      </div>


      <div>

        <p className="leading-7 text-[--text_color]">
          ISTQB® es el esquema de certificación líder a nivel mundial en el campo de las pruebas de software.
          ISTQB® estableció, y continúa evolucionando, el esquema de probador certificado reconocido
          internacionalmente, que es una cartera de certificaciones que desarrollan, amplían y validan
          habilidades de prueba. El esquema se basa en programas de estudios creados por una red global
          de expertos, el glosario ISTQB®, exámenes de muestra y el Testing Body of Knowledge (TBOK).
          La certificación Certified Tester Foundation Level proporciona a los profesionales de pruebas
          terminología esencial y una amplia gama de conocimientos. Es el requisito previo para los otros
          módulos dentro del esquema que ofrecen profundidad y especialización.
        </p>

        <p className="leading-7 text-[--text_color]">
          Los módulos de flujo {"básicos"} son válidos para cualquier tecnología/metodología/dominio de aplicación
          y se basan en el nivel básico.
        </p>
        <p className="leading-7 text-[--text_color]">
          La corriente {"Ágil"} se centra en prácticas de prueba específicas para la metodología Agile.
        </p>
        <p className="leading-7 text-[--text_color]">
          La corriente {"Especialista"} proporciona una inmersión profunda en áreas que pueden basarse en
          características de calidad, enfoques de prueba específicos y actividades de prueba, o que agrupan
          conocimientos técnicos de prueba para ciertos dominios de la industria.
        </p>

      </div>

      <section id="programas" className="my-16">

        <h4 className="text-2xl font-bold subTitle mb-10">
          Programas de participación
        </h4>

        <p className="leading-7 text-[--text_color]">
          Involucrarse con la comunidad en general es inherente a las actividades de ISTQB®. Nuestra fuerte
          conexión con el mundo académico está facilitando el desarrollo de habilidades reconocidas por la
          industria dentro del plan de estudios académico y fortaleciendo nuestros vínculos con la investigación
          en el campo de las pruebas y la ingeniería de calidad. Para las organizaciones, ofrecemos el Programa
          de socios como un servicio de valor agregado que les permite demostrar su compromiso de validar la
          competencia dentro de su organización a través de la certificación y brindar comentarios que ISTQB®
          utiliza para garantizar que se satisfagan las necesidades del mercado. ISTQB® promueve y participa
          en más interacciones dentro de la comunidad de pruebas mediante el apoyo a conferencias. Escuchar a
          personas, empresas y organizaciones es fundamental para poder servir mejor a la comunidad de pruebas.
          Saber más
        </p>

        <div className="my-4 flex flex-col">

          <Link href="#esquema" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
            Programa de socios
          </Link>

          <Link href="#programas" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
            Academia
          </Link>

          <Link href="#codigoEtico" className="underline text-[--text_color] hover:text-[#053b5e] mb-3">
            Red de conferencias
          </Link>

        </div>

      </section>

      <section id="codigoEtico" className="my-16">

        <h4 className="text-2xl font-bold subTitle mb-10">
          Código ético
        </h4>

        <p className="leading-7 text-[--text_color]">
          ISTQB®, al igual que otros organismos profesionales, incluidos ACM e IEEE, aboga por un código de
          ética como parte de nuestro compromiso con la profesión.
        </p>

        <p className="leading-7 text-[--text_color] mt-3">
          El ISTQB® define el siguiente código de ética:
        </p>
        <p className="leading-7 text-[--text_color]">
          - PÚBLICO: Los probadores de software certificados actuarán de manera consistente en el interés público.
        </p>
        <p className="leading-7 text-[--text_color]">
          - CLIENTE Y EMPLEADOR: Los probadores de software certificados actuarán de manera que redunde en el mejor
          interés de su cliente y empleador, de conformidad con el interés público.
        </p>
        <p className="leading-7 text-[--text_color]">
          - PRODUCTO: los probadores de software certificados deben garantizar que los resultados que proporcionan
          (en los productos y sistemas que prueban) cumplan con los más altos estándares profesionales posibles.
        </p>
        <p className="leading-7 text-[--text_color]">
          - JUICIO - Los probadores de software certificados deberán mantener integridad e independencia en su juicio
          profesional.
        </p>
        <p className="leading-7 text-[--text_color]">
          - ADMINISTRACIÓN: Los gerentes y líderes de pruebas de software certificados deberán suscribir y promover
          un enfoque ético para la gestión de las pruebas de software.
        </p>
        <p className="leading-7 text-[--text_color]">
          - PROFESIÓN: Los probadores de software certificados promoverán la integridad y reputación de la profesión
          de manera consistente con el interés público.
        </p>
        <p className="leading-7 text-[--text_color]">
          - COLEGAS: Los probadores de software certificados deberán ser justos y apoyar a sus colegas, y promover
          la cooperación con los desarrolladores de software.
        </p>
        <p className="leading-7 text-[--text_color]">
          - AUTO - Los probadores de software certificados participarán en el aprendizaje permanente sobre la
          práctica de su profesión y promoverán un enfoque ético para la práctica de la profesión.
        </p>

      </section>

    </div>
  )
}
