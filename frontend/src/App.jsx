import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";


function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="w-full min-h-screen">
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
