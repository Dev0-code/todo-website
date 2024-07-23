import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import './bootstrap.min.css'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
function App() {

  return (
    <>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>
        <ToastContainer/>
    </>
  )
}

export default App
