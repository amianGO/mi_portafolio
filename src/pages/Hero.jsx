import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import SobreMi from '../components/SobreMi'
import Experience from '../components/Experience';
import Persona from '../assets/Persona.png'



const Hero = () => {
    return (
       
        <>
        <section className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
            
            
            <motion.img 
            src={Persona}
            alt='Foto de Perfil'
            className='w-60 h-80  rounded-full object-cover border-2 border-white shadow-lg mb-6'
            initial = {{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.4, delay: 0.4}}

            />
            

            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}} 
            viewport={{once: false}}
            >Hola, Soy Damian Gaviria
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-300"
            initial = {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition = {{duration: 0.8, delay: 0.3}}

            >Desarrollador de Software
            </motion.p>

            <motion
                
                initial = {{ opacity: 0, y: 20}}
                animate = {{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: 0.9}}
            >
                <Link
                    to="/contacto"
                    className='mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors'
                 > Contactame
                </Link>
            </motion>
        </section>

        <SobreMi />
        <Experience />
        </>
   
    )
}

export default Hero;