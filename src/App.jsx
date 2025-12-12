import React from 'react'
import Home from './assets/pages/Home'
import { Route, Routes, } from 'react-router-dom'
import Favourites from './assets/pages/Favourites'
import NavBar from './assets/components/NavBar'
import './CSS/App.css'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (

    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}
export default App
