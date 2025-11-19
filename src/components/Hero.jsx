import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/40 px-4 py-2 text-xs font-medium text-blue-200 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300"></span>
            Real‑time rocket wellness dashboard
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(56,189,248,0.25)]">
            Futuristic Space Rocket Health
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-blue-100/90">
            Monitor propulsion, life support, hull integrity, and navigation systems with an immersive, neon‑infused interface inspired by deep‑space tech.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#vitals" className="inline-flex items-center justify-center rounded-xl bg-cyan-400/90 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition" aria-label="View live vitals">
              View Live Vitals
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-blue-300/40 bg-slate-900/40 px-5 py-3 text-blue-100 hover:bg-slate-900/60 transition" aria-label="Explore features">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
