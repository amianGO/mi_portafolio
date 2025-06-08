import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGraduationCap,
  FaSchool,
  FaMedal,
  FaBook,
  FaBriefcase,
  FaUniversity,
  FaAffiliatetheme,
} from "react-icons/fa";
import Graduacion from "../assets/Graduacion.jpg";
import EnProceso from "../assets/EN_PROCESO.png";
import { SiUdemy } from "react-icons/si";
import ImgDownload from "./ImgDownload";

const Estudios = () => {
  
  const estudios = [
    {id: "estudio1", label:"Bachiller"},
    {id: "estudio2", label:"Universidad"},
    {id: "estudio3", label:"Cursos"}
  ]

  const [selected, setSelected] = useState("estudio1");

  //Modal para abrir la Imagen
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="Estudios"
      className="min-h-screen py20 bg-gray-900 text-white px-4 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Mis Estudios
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-row md:flex-row items-center justify-center gap-5 md:gap-12 border-b border-gray-700 pb-4">
          {estudios.map(({id, label}) => (
            <motion.button
              key={id}
              onClick={() => setSelected(id)}
              className={`relative text-lg font-medium ${
                selected === id
                  ? "after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-full after:bg-white"
                  : "text-gray-400:"
              }`}
              whileHover={{ scale: 1.08 }}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Contenido de las paginas */}

        <div className="mt-10 text-center text-2xl">
          {selected === "estudio1" && (
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-1"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                Bachiller Academico
              </motion.h3>

              <div className="flex flex-col md:flex-row gap-7">
                {/* Imagen */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <motion.figure
                    className="w-full max-w-md  p-2 cursor-pointer"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={Graduacion}
                      alt="Certificado de Graduacion"
                      className="mx-auto w-full max-w-[280px] md:max-w-md h-auto object-contain"
                      onClick={() => setIsOpen(true)}
                    />
                    <figcaption className="text-center text-sm mt-2">
                      Certificado de Graduacion
                    </figcaption>
                  </motion.figure>
                </div>

                {/* Texto */}
                <motion.div
                  className="w-full md:w-1/1 p-4 "
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="flex flex-row gap-2 justify-center">
                    <FaGraduationCap className="text-2xl text-blue-700" />
                    <h4 className="text-lg font-medium">
                      I.E Tecnico Industrial Simona Duque
                    </h4>
                  </div>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <FaSchool className="text-2xl text-gray-400" />
                    <h5 className="font-medium text-justify text-lg">
                      Informacion Basica
                    </h5>
                  </div>

                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-100 text-justify">
                    <li>Año de Graduacion: 2022</li>
                    <li>Ciudad y Pais: Marinilla, Colombia</li>
                    <li>Modalidad: Presencial</li>
                  </ul>

                  <div className="flex flex-row gap-2 mt-3 justify-normal">
                    <FaBriefcase className="text-2xl text-amber-800" />
                    <h5 className="font-medium text-justify text-lg">
                      Experiencia Y Participacion
                    </h5>
                  </div>

                  <ul className="pl-5 mt-2 text-sm text-gray-100 text-justify">
                    <li>
                      Participe en Teatro y Deporte con Medalla de
                      reconocimiento
                    </li>
                    <li>Representante de Grupo</li>
                    <li>Participacion en Cuidado de Mayores</li>
                  </ul>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <FaMedal className=" text-2xl text-yellow-400" />
                    <h5 className="font-medium text-justify text-lg">
                      Habilidades Adquiridas
                    </h5>
                  </div>
                  <ul className="pl-5 mt-2 text-sm text-justify text-gray-100 list-disc">
                    <li>Trabajo en Equipo</li>
                    <li>Responsabilidad</li>
                    <li>Comunicacion</li>
                    <li>
                      Uso de Herramientas Tec (HTML, CSS , JS, Ofimaticas)
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {selected === "estudio2" && (
            <div>
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                Tecnologia en Desarrollo de Software
              </motion.h3>

              <div className="flex flex-col md:flex-row gap-7">
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <motion.figure
                    className="w-full max-w-md p-2 cursor-pointer"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={EnProceso}
                      alt="En Proceso"
                      className="mx-auto w-full max-w-[280px] md:max-w-md h-auto object-contain"
                      onClick={() => setIsOpen(true)}
                    />
                    <figcaption className="text-center text-sm mt-2">
                      Actualmente Cursando 5to Semestre
                    </figcaption>
                  </motion.figure>
                </div>

                {/* Texto */}
                <motion.div
                  className="w-full md:w-1/1 p-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="flex flex-row gap-2 justify-center ">
                    <FaUniversity className="text-2xl text-amber-800" />
                    <h4 className="text-lg font-medium">
                      I.Universitaria Digital de Antioquia
                    </h4>
                  </div>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <FaBook className="text-2xl text-gray-400" />
                    <h5 className="font-medium text-justify text-lg">
                      Informacion Basica
                    </h5>
                  </div>

                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-100 text-justify">
                    <li>Inicio - 2023, fin - 2025</li>
                    <li>Ciudad y Pais: Medellin, Colombia</li>
                    <li>Modalidad: Virtual</li>
                  </ul>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <FaAffiliatetheme className="text-2xl text-cyan-400"/>
                    <h5 className="font-medium text-justify text-lg">Experiencia y Participacion</h5>
                  </div>

                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-100 text-justify">
                    <li>Participacion en Semilleros de Lectura e Idiomas</li>
                    <li>Aprendizaje Autonomo</li>
                    <li>Continua comunicacion y adaptacion en ambientes remotos</li>
                  </ul>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <FaMedal className="text-2xl text-yellow-400" />
                    <h5 className="font-medium text-justify text-lg">Habilidades Adquiridas</h5>
                  </div>

                  <ul className="pl-5 list-disc mt-2 text-sm text-gray-100 text-justify">
                    <li>Adaptacion Rapida a entornos Remotos</li>
                    <li>Node.js, JavaScript, HTML, CSS, Java, Python</li>
                    <li>Uso de plataformas online</li>
                    <li>Resolucion de Problemas de alto nivel</li>
                  </ul>

                </motion.div>
              </div>
            </div>
          )}

          {selected === "estudio3" && (
            <div>
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                Cursos
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <motion.div
                  className="w-full md:w-1/1 p-4"
                  initial={{opacity: 0, y: 50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: false}}
                >
                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <SiUdemy className="text-2xl text-purple-500"/>
                    <h4 className="text-lg font-medium">Master Completo en Java de cero a Experto (+180hrs)</h4>
                  </div>

                  <div className="pl-5">
                    <div className="flex flex-row gap-2 justify-normal mt-3">
                      <h5 className="font-medium text-justify text-lg">Conocimientos</h5>
                    </div>

                    <ul className="list-disc pl-5 mt-2 text-sm text-justify text-gray-100">
                      <li>Java EE, Java Fx, Java Swing</li>
                      <li>Java SpringBoot, Spring Security</li>
                      <li>API Rest, API</li>
                      <li>Hibernate, SQL, JDBC</li>
                      <ImgDownload />
                    </ul>
                  </div>

                  <div className="flex flex-row gap-2 justify-normal mt-3">
                    <SiUdemy className="text-2xl text-purple-500"/>
                    <h4 className="text-lg font-medium">Android y Kotlin Cero a Profesional (+45 hrs)</h4>
                  </div>

                  <div className="pl-5">
                    <div className="mt-3">
                      <h5 className="font-medium text-justify text-lg">Conocimientos</h5>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-sm text-justify text-gray-100">
                      <li>SQlite, API, CRUD</li>
                      <li>Layouts</li>
                      <li>Authenticacion, Oauth</li>
                      <li>GSON</li>
                      <ImgDownload />
                    </ul>
                  </div>

                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal al final del renderizado para abrir la imagen */}
      {selected ==="estudio1" &&isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={Graduacion}
            alt="Certificado Ampliado"
            className="max-w-md max-h-full"
          />
        </div>
      )}
      {selected === "estudio2" && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
          >
          <img 
            src={EnProceso} 
            alt="Proceso Amplificado" 
            className="max-w-md max-h-md"
            />
        </div>    
      )}
    </section>
  );
};

export default Estudios;
