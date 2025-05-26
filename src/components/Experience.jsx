import { motion } from "framer-motion";
const Experience = () => {

    return (
        <section
            id="Experiencia"
            className="min-h-screen py-20 bg-gray-900 text-white px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-10"
                    initial={{opacity: 0, y: -100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: false}}
                >Experiencia

                </motion.h2>

                <div className="max-w-6xl mx-auto">
                    
                    <h2 className="text-2xl font-semibold text-center mb-10">Durante mi Vida</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <motion.div 
                            className="bg-gray-800 rounded-xl p-6 shadow-lg"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}
                            whileHover={{scale: 1.05}}
                            viewport={{once: false}}
                            >

                            <h3 className="text-xl font-bold mb-4">Como Programador</h3>
                            <p className="text-gray-300">Contenido</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gray-800 rounded-xl p-6"
                            initial = {{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}
                            whileHover={{scale: 1.05}}
                            viewport={{once: false}}
                            >
                            <h3 className="text-xl font-bold mb-4">Otros Empleos</h3>
                            <p className="text-gray-300">Contenido</p>
                        </motion.div>
                    </div>

                </div>
        </section>
    )

}

export default Experience;