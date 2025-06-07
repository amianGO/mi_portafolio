import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import SobreMi from '../components/SobreMi'
import Experience from '../components/Experience';
import Persona from '../assets/Persona.png'
import Estudios from '../components/Estudios';
import ScrollNav from '../components/ScrollNav';
import ContactForm from '../components/ContactForm';
import { DiDart,DiJava,DiMysql,DiMongodb,DiReact,DiJavascript, DiDatabase, } from 'react-icons/di';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
       
        <>
        <ScrollNav/>
        <section id='inicio' className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
            
            
            <motion.img 
            src={Persona}
            alt='Foto de Perfil'
            className='w-60 h-80  rounded-full object-cover border-2 border-gray-800 shadow-lg mb-6'
            initial = {{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.4, delay: 0.4}}
            />
            <motion.span 
                className='py-3 text-sm font-semibold'
                initial = {{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition = {{duration: 0.8, delay: 0.3}}
            >
                <Typewriter 
                    words={['!Aviso, Si estas en Movil, la experiencia se disfruta mejor, con el movil de lado¡']}
                    loop={0} // 0 = Infinito
                    cursor
                    cursorStyle = "_"
                    typeSpeed={100}
                    deleteSpeed={90}
                    delaySpeed={1500}
                />
            </motion.span>
            

            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}} 
            viewport={{once: false}}
            >Hola, Soy Damian Gaviria
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-300 font-semibold"
            initial = {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition = {{duration: 0.8, delay: 0.3}}

            >Desarrollador de Software Apasionado por las  aplicaciones Moviles y de Escritorio
            </motion.p>

            <motion.span 
                className='py-8 text-xl font-semibold'
                initial = {{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition = {{duration: 0.8, delay: 0.3}}
            >
                <Typewriter 
                    words={['Backend Developer', 'FullStack Junior', 'Movil Developer', 'Amante del codigo']}
                    loop={0} // 0 = Infinito
                    cursor
                    cursorStyle = "_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.span>

            <motion.div 
                className='flex justify-center flex-wrap gap-8 text-[3rem] text-gray-700'
                initial = {{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.2}}
                whileHover={{scale: 1.05}}
                >
                
                <DiJava title='Java' className='hover:text-red-500 transition'/>
                

                <DiDart title='Dart' className='hover:text-blue-500 hover:-scale- transition'/>

                <DiMysql title='MySql' className='hover:text-blue-500 transition' />

                <DiMongodb title='MongoDb' className='hover:text-green-800 transition'/>

                <DiReact title='React' className='hover:text-blue-400 transition'/>

                <DiDatabase title='Database' className='hover:text-yellow-500'/>

                <DiJavascript title='JavaScript' className='hover:text-yellow-500'/>

            </motion.div>
           
        </section>

        <SobreMi />
        <Experience />
        <Estudios />
        <ContactForm />
        </>
   
    )
}

export default Hero;