import React from 'react'
import Navbar from './components/Navbar'
import HospitalHero from './components/HospitalHero'
import ServiceCards from './components/ServiceCards'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HospitalHero />
      <ServiceCards />
      <WhyUs />
      <Contact />
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm text-slate-600">
          © {new Date().getFullYear()} Veneranda Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
