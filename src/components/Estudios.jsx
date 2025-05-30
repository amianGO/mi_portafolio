import { motion } from "framer-motion";
import { useState } from "react";
import { FaGraduationCap, FaSchool, FaMedal, FaBook } from "react-icons/fa";

const Estudios = () => {

    const [selected, setSelected] = useState('estudio1');

    return (
        <section
            id="Estudios"
        className="min-h-screen py20 bg-gray-900 text-white px-4 flex flex-col items-center">
            <motion.h2
                className="text-3xl font-bold mb-10 text-center"
                initial = {{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
            >
                Mis Estudios
            </motion.h2>

            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-b border-gray-700 pb-4">
                    {['estudio1','estudio2','estudio3'].map((estudio, index) => (
                        <motion.button 
                            key={index}
                            onClick={() => setSelected(estudio)}
                            className={`relative text-lg font-medium transition duration-100 ${
                                selected === estudio ? 'after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-full after:bg-white' : 'text-gray-400:'
                            }`}
                            whileHover={{scale: 1.08}}
                        >
                            {`Estudio ${index + 1}`}
                        </motion.button>
                    ))}
                </div>

                {/* Contenido de las paginas */}
                <div className="mt-10 text-center text-2xl">
                    {selected === 'estudio1' && 
                        <div>
                            <motion.h3
                            className="text-2xl font-semibold"
                            initial={{opacity: 0, y: -50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: false}}
                            >
                                Bachiller Academico  
                            </motion.h3>
                            <div>
                                <h4>I.E.Tecnico Industrial Simona Duque</h4>
                                <div>
                                    <div>

                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    }

                    {selected === 'estudio2' &&
                        <div>
                            <motion.h3
                                className="text-2xl font-semibold"
                                initial={{opacity: 0, y: -50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: false}}
                            >
                                Tecnologia en Desarrollo de Software
                            </motion.h3>
                            <div>
                                
                            </div>
                        </div>
                    }

                    {selected === 'estudio3' &&
                        <div>
                            <motion.h3
                                className="text-2xl font-semibold"
                                initial={{opacity: 0, y: -50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: false}}
                            >
                                Cursos
                            </motion.h3>
                            <div>

                            </div>
                        </div>
                    }

                </div>

            </div>
        </section>
    )
}

export default Estudios;