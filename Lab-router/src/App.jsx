import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Perfil } from './pages/Perfil'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout';

function App() {
  return(
    <div>
      <Layout />
      <Routes>
          <Route path="Dashboard" element={ <Dashboard/> }></Route>
          <Route path="Login" element={ <Login/> }></Route>
          <Route path="Home" element={ <Home/> }></Route>
          <Route path = "Perfil" element={<Perfil/>}></Route>
          <Route path="*" element={ <Home/> }></Route>
      </Routes>
      <footer className="bg-light text-center py-3 fixed-bottom">
            <p className="mb-0">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
