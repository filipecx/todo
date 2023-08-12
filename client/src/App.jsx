import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'

import { Navegacao } from './components/Navegacao'
import { Compartilhado } from './pages/Compartilhado'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='App'>
      <Navegacao />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/compartilhado' element={<Compartilhado />} />
      </Routes>
    </div>
        
          
      
  )
}

export default App
