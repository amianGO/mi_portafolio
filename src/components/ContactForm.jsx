import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaWebAwesome, FaMessage, FaFacebook, FaInstagram, FaThreads, FaInfo} from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        
        'service_9gnego2',
        'template_nfht1bo',
        form.current,
        'qnAcalR3ElZ5DADmO'

    ).then(
        (result) => {
            console.log("Correo Enviado", result.text);
            alert('!Mensaje enviado Correctamente¡');
            form.current.reset();
        },
        (error) => {
            console.log("Error al enviar: ", error.text);
            alert("Hubo un error, Intenta Denuevo");
        }
    );
    };

    return (
        <section id='Contacto' className='min-h-screen py-20 bg-gray-900 text-white px-4'>
            
                <div className='max-w-6xl mx-auto border-t'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                        <div className='bg-gray-900 rounded-xl p-6'>

                            <motion.div 
                                className='flex flex-row gap-2 justify-center mt-3 mb-4'
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                >
                                <FaMessage className='text-3xl text-blue-800'/>
                                <h3 className='text-xl font-bold'>Contactame</h3>
                            </motion.div>

                            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 w-full max-w-md mx-auto p-4 rounded'>
                                <input type="text" name="user_name" placeholder='Tu Nombre' required className='border-b bg-transparent transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none'/>
                                <input type="email" name="user_email" placeholder='Tu Email' required className='border-b bg-transparent transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none' />
                                <textarea name="message" placeholder='Escribe el Mensaje que desees dejarme' required className='border-none resize-none bg-transparent transition-transform ease-in-out hover:scale-105 focus:outline-none' rows={5}/>
                                <button type='submit' className='bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition'
                                
                                >Enviar</button>
                            </form>
                        </div>

                        <div className='bg-gray-900 rounded-xl p-6 '>

                            <motion.div 
                                className='flex flex-row gap-2 justify-center mt-3 mb-6'
                                initial = {{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                >
                                <FaWebAwesome className='text-3xl text-yellow-400'/>
                                <h3 className='text-xl font-bold'>Mis Redes Sociales</h3>
                            </motion.div>

                            <ul className='list-disc pl-5 flex flex-row gap-4 justify-center'>
                                <li className='flex flex-row gap-2'>
                                    <FaFacebook className='text-2xl text-blue-600'/>
                                    <a href="https://www.facebook.com/damian.gaviriaoyola" className='text-xl text-blue-600 mb-7 hover:text-blue-800 transition-transform ease-in-out hover:scale-105'>Facebook</a>
                                </li>

                                <li className='flex flex-row gap-2 mb-7'>
                                    <FaThreads className='text-2xl text-gray-950' />
                                    <a href="https://www.threads.com/@sr.damx" className='text-xl text-gray-950 hover:text-white transition-transform ease-in-out hover:scale-105'>Threads</a>
                                </li>

                                <li className='flex flex-row gap-2'>
                                    <FaInstagram className='text-2xl text-pink-400'/>
                                    <a href="https://www.instagram.com/sr.damx/" className='text-xl text-pink-400 mb-7 hover:text-pink-700 transition-transform ease-in-out hover:scale-105'>Instagram</a>
                                </li>
                            </ul>
                            <div>
                                <div className='flex flex-row gap-2 justify-normal mt-3'>
                                    <FaInfo className='text-2xl text-white' />
                                    <h4 className='text-lg font-semibold'>Informacion Adicional</h4>
                                </div>
                                <ul className='list-disc mt-3 justify-normal text-sm pl-5 grid grid-flow-row gap-2'>
                                    <li><p>Edad 21 años.</p></li>
                                    <li><p>Lugar de Residencia: Medellin, Antioquia.</p></li>
                                    <li><p>Lenguaje Favorito de Programacion: Java.</p></li>
                                    <li><p>Me Inspiran los videojuegos para crear experiencias Dinamicas.</p></li>
                                    <li><p>Interesado en la Arquitectura de Software.</p></li>
                                    <li><p>Autodidacta y sé encontrar el camino correcto con investigacion.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
        </section>
    )
    

};