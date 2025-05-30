import { motion } from "framer-motion";
import { GrGithub, GrCalendar, GrCode, GrServices } from "react-icons/gr";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="Experiencia"
      className="min-h-screen py-20 bg-gray-900 text-white px-4"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Experiencia
      </motion.h2>

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold mb-4 text-center justify-between flex gap-2">
              {" "}
              <GrCode className="text-2xl text-orange-400" />{" "}
              <FaLaptopCode className="text-2xl text-gray-900" /> Como
              Programador <GrCode className="text-2xl text-orange-400" />{" "}
              <FaLaptopCode className="text-2xl text-gray-900" />
            </h3>
            <p className="text-gray-300">
              A pesar de no tener experiencia profesional formal, he trabajado
              en varios proyectos personales que demuestran mi iniciativa,
              habilidades tecnicas y ganas de aprender en este camino.
            </p>{" "}
            <br />
            <ul className="list-disc pl-5 text-sm text-gray-400 mb-4">
              <li>Desarrollo de Aplicaciones FullStack con Java</li>
              <li>Autenticacion con JWT y Control de Acceso</li>
              <li>Uso de MongoDB y PostgreSQL para persistencia de Datos</li>
            </ul>
            <a
              href="https://github.com/amianGO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition"
            >
              <GrGithub className="text-2xl" />
              <span>Ver Proyectos en GitHub</span>
            </a>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold mb-4 text-center justify-between flex">
              <GrServices className="text-2xl text-gray-600" />
              <FaBriefcase className="text-2xl text-orange-950"/>
              Otros Empleos
              <GrServices className="text-2xl text-gray-600"/>
              <FaBriefcase className="text-2xl text-orange-950"/>
            </h3>
            <p className="text-gray-300">
              He trabajado en el Area de atencion al cliente en diferentes
              empresas donde he fortalecido mis habilidades en trabajo en
              equipo, atencion al detalle y gestion del tiempo
            </p>{" "}
            <br />
            <ul className="list-disc pl-5 text-sm text-gray-400 mb-4">
              <li>
                Atencion al Cliente - [Empresa Servillanogrande] (2023 - 2025)
              </li>
              <li>Atencion al Cliente - [Empresa ElTriangulo] (2021 - 2022)</li>
              <li>
                Freelancer - Gestor Database [Empresa Servillanogrande] (2025)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
