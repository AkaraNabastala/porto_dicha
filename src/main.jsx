// File: main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import 'remixicon/fonts/remixicon.css'
import Preloader from './components/Preloader.jsx'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <Navbar /> 
    
    <div className="container mx-auto px-4">
      <div className="md:pt-[120px] pt-20"> 
          <div className="md:hidden flex justify-center py-4 fixed top-0 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
              <h1 className="text-4xl font-extrabold"><span className="text-violet-500">Dic</span>ha.</h1>
          </div>
          <App />
      </div>
      
    </div>
    <Footer /> 
  </StrictMode>,
)