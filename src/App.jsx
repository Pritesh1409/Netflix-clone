import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='player' element={<Player/>}/>
      <Route path='/movies' element={<Movies/>} />
      <Route path='/tv' element={<TVShows/>} />
      <Route path='/netflix' element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
