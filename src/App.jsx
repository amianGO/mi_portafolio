/* Paso 4 Inicio*/
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Hero from './pages/Hero'

function App(){
  return (
    
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='*' element={<div className='text-red-500'>404</div>} />
      </Routes>
    
  )
}

export default App
/* Paso 4 Fin*/
