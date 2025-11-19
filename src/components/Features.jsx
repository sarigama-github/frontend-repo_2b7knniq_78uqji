import React from 'react'
import { Rocket, Activity, Shield, Navigation } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Propulsion Metrics',
    desc: 'Thrust output, fuel mix, and engine temps with anomaly detection.',
  },
  {
    icon: Activity,
    title: 'Life Support',
    desc: 'O2 levels, CO2 scrubber status, pressure, and biometrics feed.',
  },
  {
    icon: Shield,
    title: 'Hull Integrity',
    desc: 'Micro‑fracture scan, radiation shielding, and thermal stress.',
  },
  {
    icon: Navigation,
    title: 'Navigation Sync',
    desc: 'Autopilot trajectory, drift compensation, and star‑map sync.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Mission Control Modules</h2>
          <p className="mt-2 text-blue-200/80 max-w-2xl">A modular system designed for clarity in the void. Every widget is optimized for high‑contrast, rapid response, and serenity under pressure.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-blue-500/20 bg-slate-900/40 p-5 backdrop-blur hover:border-cyan-400/30 transition">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
                <f.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
