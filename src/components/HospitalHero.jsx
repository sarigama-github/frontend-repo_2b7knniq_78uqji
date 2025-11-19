import React from 'react'
import Spline from '@splinetool/react-spline'

function HospitalHero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      {/* 3D Neon Medical Space Visual */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode" className="!w-full !h-full" />
      </div>
      {/* Overlays for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-white/90" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(56,189,248,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 h-full grid place-items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
            Trusted multi‑specialty care • Open 24/7
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Veneranda Hospital
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-slate-700">
            Comprehensive care across diagnostics, maternity & child health, general medicine & surgery, dental, inpatient wards, pharmacy, emergency services, immunisation, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold shadow-lg shadow-sky-500/30 hover:bg-sky-700 transition">Explore Services</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50 transition">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HospitalHero
