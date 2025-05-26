/* Paso 4 Inicio*/
import { div } from 'framer-motion/client'
import {Routes, Route} from 'react-router-dom'
import Hero from './pages/Hero'
import ContactForm from './components/contactForm'

function App(){
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/contacto' element={<ContactForm />} />
      <Route path='*' element={<div className='text-red-500'>404</div>} />
    </Routes>
  )
}

export default App
/* Paso 4 Fin*/
