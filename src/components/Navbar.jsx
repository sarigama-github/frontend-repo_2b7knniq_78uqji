import React from 'react'
import { Phone, MapPin, Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center text-white font-black">V</div>
            <div className="leading-tight">
              <div className="text-slate-900 font-bold text-lg">Veneranda Hospital</div>
              <div className="text-xs text-slate-500 -mt-1">Care. Compassion. Clarity.</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700">
            <a href="#services" className="hover:text-sky-600 transition">Services</a>
            <a href="#departments" className="hover:text-sky-600 transition">Departments</a>
            <a href="#about" className="hover:text-sky-600 transition">About</a>
            <a href="#contact" className="hover:text-sky-600 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-700 transition">
              <Phone size={16} /> Call Now
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200/60 hover:from-sky-600 hover:to-blue-700 transition">
              <MapPin size={16} /> Get Directions
            </a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
