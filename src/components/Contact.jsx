import React, { useState } from 'react'
import { Send } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">For appointments, emergencies, or general enquiries—our team is ready to help.</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold text-slate-900">Emergency</div>
                <div className="text-sm text-slate-600">+1 (000) 555‑0123 • 24/7</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold text-slate-900">Address</div>
                <div className="text-sm text-slate-600">123 Veneranda Way, Health City</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! Our team will contact you shortly.')
              setForm({ name: '', phone: '', message: '' })
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm text-slate-700">Full Name
                <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" placeholder="Jane Doe" required />
              </label>
              <label className="text-sm text-slate-700">Phone Number
                <input value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" placeholder="+1 (000) 555‑0123" required />
              </label>
              <label className="text-sm text-slate-700">Message
                <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" placeholder="Briefly describe your request" />
              </label>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-white font-semibold hover:from-sky-600 hover:to-blue-700 transition">
                <Send size={16} /> Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
