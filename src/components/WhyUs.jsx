import React from 'react'

const highlights = [
  { title: '24/7 Coverage', desc: 'Emergency, ICU, and on-call specialists to keep care continuous.' },
  { title: 'Patient‑First Design', desc: 'Clear signage, soothing palettes, and privacy‑forward spaces.' },
  { title: 'Digital Records', desc: 'Secure EMR with streamlined registration and discharge.' },
  { title: 'Quality & Safety', desc: 'WHO protocols, infection control, and continuous audit culture.' },
]

function WhyUs() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Veneranda</h2>
            <p className="mt-3 text-slate-600 max-w-xl">We blend modern medical practice with compassionate care. Our teams collaborate across departments for fast, confident decision‑making and warm bedside manner.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="font-semibold text-slate-900">{h.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-[16/10]">
            <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_70%_0%,rgba(14,165,233,0.15),transparent)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
              <div className="text-slate-900 font-semibold">Patient Satisfaction</div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
              </div>
              <div className="mt-2 text-sm text-slate-600">92% positive feedback this quarter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
