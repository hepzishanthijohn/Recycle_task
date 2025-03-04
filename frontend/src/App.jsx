import { useState } from 'react'
import HeroSection from './pages/herosection/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Navbar from './components/navbar/Navbar';
import FeaturedSection from './pages/featuredSection/FeaturedSection';
import SustainabilitySection from './pages/SustainabilitySection/SustainabilitySection';
import RecyclickLanding from './pages/recyclickLanding/RecyclickLanding';
import PresenceSection from './pages/presenceSection/presenceSection';
import InitiativesSection from './pages/initiativesSection/InitiativesSection';
import ServicesSection from './pages/ServicesSection/ServicesSection';
import PartnersSection from './pages/partnersSection/PartnersSection';
import TalkingAboutUs from './pages/AboutUs/TalkingAboutUs';
import CustomerTestimonials from './pages/CustomerTestimonials/CustomerTestimonials';
import ContactForm from './pages/contact/ContactForm';
import Footer from './components/footer/Footer';
import ImpactSection from './pages/impactSection/ImpactSection';

function App() {


  return (
    <>
    <Navbar/>
     <HeroSection/>
    
     <SustainabilitySection/>
     <RecyclickLanding/>
     <PresenceSection/>
     <InitiativesSection/>
     <ServicesSection/>
     <PartnersSection/>
     <ImpactSection/>
     <TalkingAboutUs/>
     <CustomerTestimonials/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default App
