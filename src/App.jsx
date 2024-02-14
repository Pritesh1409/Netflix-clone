import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Player from './pages/Player'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/netflix' element={<Netflix/>}/>
      <Route path='player' element={<Player/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
