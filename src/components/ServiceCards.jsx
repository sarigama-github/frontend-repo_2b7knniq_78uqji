import React from 'react'
import { Stethoscope, HeartPulse, Baby, TestTubes, Bot, Syringe, Pill, Ambulance, Hospital, BedDouble, Scan, Tooth, Activity } from 'lucide-react'

const items = [
  { icon: Scan, title: 'Scans & Imaging', desc: 'Ultrasound, X‑ray, CT, and diagnostic imaging with expert radiologists.' },
  { icon: TestTubes, title: 'Laboratory Services', desc: 'Comprehensive pathology with rapid turnaround and quality assurance.' },
  { icon: Baby, title: 'Maternity & Child Health', desc: 'Antenatal, delivery suites, and pediatric care with family‑first attention.' },
  { icon: Stethoscope, title: 'General Medicine', desc: 'Outpatient clinics and inpatient care across a spectrum of conditions.' },
  { icon: Activity, title: 'General Surgery', desc: 'Elective and emergency procedures with modern theatres and protocols.' },
  { icon: Tooth, title: 'Dental Services', desc: 'Preventive and restorative dentistry with gentle, modern techniques.' },
  { icon: BedDouble, title: 'Inpatient Wards', desc: 'Comfortable beds, 24/7 nursing, and compassionate monitoring.' },
  { icon: Pill, title: 'Pharmacy', desc: 'On‑site pharmacy with counselling and medication safety checks.' },
  { icon: Ambulance, title: 'Emergency', desc: 'Round‑the‑clock emergency response and trauma stabilization.' },
  { icon: Syringe, title: 'Immunisation', desc: 'Childhood schedule, travel vaccines, and adult boosters.' },
  { icon: Hospital, title: 'Other Services', desc: 'Physiotherapy, nutrition, wellness clinics, and specialist referrals.' },
]

function ServiceCards() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Evidence‑based care delivered by experienced clinicians, supported by modern diagnostics and patient‑centered design.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300/60 hover:shadow-lg hover:shadow-sky-100 transition">
              <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-700 ring-1 ring-sky-500/20">
                <it.icon size={22} />
              </div>
              <h3 className="text-slate-900 font-semibold">{it.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
