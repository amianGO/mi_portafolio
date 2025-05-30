import { motion, AnimatePresence } from "framer-motion";
import SobreMiPrueba from "../assets/SobreMi_Prueba.jpg";
import {
  FaStar,
  FaBook,
  FaPuzzlePiece,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { GiNotebook, GiAchievement, GiConsoleController } from "react-icons/gi";
import { MdFlag, MdSportsEsports } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { SiSteam } from "react-icons/si";
import { useState } from "react";

const SobreMi = () => {
    
  const cards = [
    {
      id: 0,
      iconos: [
        <FaStar className="text-yellow-400 " />,
        <FaStar className="text-yellow-400 " />,
        <FaStar className="text-yellow-400 " />,
        <FaStar className="text-yellow-400 " />,
      ],
      texto:
        "Soy una persona apasionada por el desarrollo Backend y la creacion de APIs seguras y estables. Me atrae profundamente el desarrollo de apliaciones de Escritorio y plataformas moviles.",
    },

    {
      id: 1,
      iconos: [
        <FaBook className="text-orange-900 mb-1" />,
        <GiNotebook className="text-teal-500  " />,
        <FaBook className="text-orange-900 " />,
        <GiNotebook className="text-teal-500 " />,
      ],
      texto:
        "Estoy en constante aprendizaje, porque cada dia representa una nueva oportunidad para crecer. Me gusta explorar distintas areas de conocimiento, ya que eso me permite construir bases solidas para un dominio mas profundo a futuro.",
    },

    {
      id: 2,
      iconos: [
        <GiAchievement className="text-yellow-300 " />,
        <FaPuzzlePiece className="text-cyan-300 " />,
        <MdFlag className="text-black " />,
        <BiTargetLock className="text-red-500 " />,
      ],
      texto:
        "Soy amante de los desafios, siempre dispuesto a competir por un mejor lugar, buscando soluciones modernas y utiles para que aporten valor en mi entorno",
    },

    {
      id: 3,
      iconos: [
        <FaGamepad className="text-black" />,
        <SiSteam className="text-blue-800" />,
        <GiConsoleController className="text-green-700" />,
        <MdSportsEsports className="text-gray-500" />,
      ],
      texto:
        "En mis tiempos libres disfruto de los videojuegos, de descubrir nuevas tecnologias que conecten con mis intereses, de viajar y especialmente de los lugares tranquilos y silenciosos.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toogleCard = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="sobre-mi"
      className="min-h-screen py-20  bg-gray-900  text-white px-4"
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Mi
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Imagen Fondo */}
        <motion.img
          className="w-full max-w-sm h-auto object-contain rounded-2xl shadow-lg"
          src={SobreMiPrueba}
          alt="Sobre Mi"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false }}
        />

        {/* Cuadros de Texto */}

        <div className="flex flex-col gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="w-[448px] bg-gray-800 p-7 rounded-xl shadow-md cursor-pointer"
              initial = {{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              whileHover={{scale: 1.05}}
              transition={{type: "spring", stiffness: 200}}
              viewport={{once: false}}
              onClick={() => toogleCard(index)}
            >
              <div className="flex items-center justify-between ">
                <div className="flex gap-20 text-2xl ">
                  {" "}
                  {card.iconos.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className="text-white mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.texto}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
