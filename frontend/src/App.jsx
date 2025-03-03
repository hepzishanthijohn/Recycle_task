import { useState } from 'react'
import HeroSection from './pages/herosection/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>
    <Navbar/>
     <HeroSection/>
    </>
  )
}

export default App
