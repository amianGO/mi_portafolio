import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
        <section id='contacto' className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 w-full max-w-md mx-auto p-4 bg-white rounded'>
                <input type="text" name="user_name" placeholder='Tu Nombre' required className='border p-2 rounded'/>
                <input type="email" name="user_email" placeholder='Tu Email' required className='border p-2 rounded' />
                <textarea name="message" placeholder='Tu Mensaje' required className='border p-2 rounded resize-none' rows={5}/>
                <button type='submit' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                
                >Enviar</button>
            </form>
        </section>
    )
    

};
