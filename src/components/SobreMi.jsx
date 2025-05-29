import { motion } from "framer-motion";
import SobreMiPrueba from "../assets/SobreMi_Prueba.jpg"

const SobreMi = () => {
    return (
        <section id="sobre-mi" className="min-h-screen py-20  bg-gray-900  text-white px-4">
            <motion.h2 
                className="text-3xl font-bold mb-10 text-center"
                initial= {{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                >Sobre Mi

            </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            

            {/* Imagen Fondo */}
            <motion.img
            className="w-full max-w-sm h-auto object-contain rounded-2xl shadow-lg"
            src={SobreMiPrueba}
            alt="Sobre Mi"
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{scale:1.05}}
            transition={{type: 'spring', stiffness: 200}}
            viewport={{once: false}}
            />

            {/* Cuadros de Texto */}

            <div className="flex flex-col gap-6">
                <motion.div 
                    className="bg-gray-800 p-6 rounded-xl shadow-md max-w-md"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: 'spring', stiffness: 200}}
                    whileHover={{scale: 1.05}}
                    viewport={{once: false}}
                    >
                    <h3 className="text-xl font-semibold mb-2 text-white">Algo Sobre Mi</h3>
                    <p className="text-white">
                        Soy Desarrollador de Software con Conocimientos en React, Java, Spring, Node.js, Desarrollo Web
                    </p>

                </motion.div>

                <motion.div
                    className="bg-gray-800 p-6 rounded-xl shadow-md max-w-md text-white"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{type: 'spring', stiffness: 200}}
                    whileHover={{scale: 1.05}}
                    viewport={{once: false}}
                    
                >
                    <h3 className="text-xl font-semibold mb-2">Algo Sobre Mi</h3>

                    <p>
                        Soy Desarrollador de Software con Conocimientos en React, Java, Spring, Node.js, Desarrollo Web
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-6 rounded-xl shadow-md max-w-md text-white"
                    initial={{opacity: 0, y:50}}
                    whileHover={{scale: 1.05}}
                    transition={{type: 'spring', stiffness: 200}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: false}}
                    
                >

                    <h3 className="text-xl font-semibold mb-2">Algo Sobre Mi</h3>
                    <p>
                       Soy Desarrollador de Software con Conocimientos en React, Java, Spring, Node.js, Desarrollo Web
                    </p>

                </motion.div>

                <motion.div
                    className="bg-gray-100 p-6 rounded-xl shadow-md max-w-md text-black"
                    initial={{opacity:0, y:50}}
                    whileHover={{scale: 1.05}}
                    transition={{type: 'spring', stiffness: 200}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: false}}
                >
                    <h3 className="text-xl font-semibold mb-2">Algo Sobre Mi</h3>

                    <p>
                        Soy Desarrollador de Software con Conocimientos en React, Java, Spring, Node.js, Desarrollo Web
                    </p>
                </motion.div>

                
            </div>
            
        </div>

        </section>
    )
}

export default SobreMi;