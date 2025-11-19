import React, { useEffect, useMemo, useRef, useState } from 'react'

function useSimulatedSignal(base = 70, variance = 10, interval = 900) {
  const [value, setValue] = useState(base)
  useEffect(() => {
    const id = setInterval(() => {
      const delta = (Math.random() - 0.5) * variance
      setValue((v) => Math.max(0, Math.round((v + delta) * 10) / 10))
    }, interval)
    return () => clearInterval(id)
  }, [variance, interval])
  return value
}

function Gauge({ label, unit, value, min = 0, max = 100, color = 'from-cyan-400 to-blue-500' }) {
  const pct = useMemo(() => Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)), [value, min, max])
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-slate-900/50 p-5 backdrop-blur">
      <div className="flex items-baseline justify-between">
        <span className="text-blue-200/70 text-sm">{label}</span>
        <span className="text-blue-200/50 text-xs">{min}–{max} {unit}</span>
      </div>
      <div className="mt-3 h-3 w-full rounded-full bg-slate-800/80">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: pct + '%' }}
        />
      </div>
      <div className="mt-2 text-2xl font-semibold text-white">
        {value}
        <span className="ml-1 text-blue-200/70 text-sm">{unit}</span>
      </div>
    </div>
  )
}

function Vitals() {
  const thrust = useSimulatedSignal(68, 8, 1000)
  const o2 = useSimulatedSignal(96, 2, 1300)
  const hull = useSimulatedSignal(92, 4, 1100)
  const temp = useSimulatedSignal(340, 20, 1200)

  return (
    <section id="vitals" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Live Systems Vitals</h2>
            <p className="mt-2 text-blue-200/80 max-w-xl">Streaming telemetry from propulsion, life support, and structural monitors. Values are simulated in this demo.</p>
          </div>
          <div className="hidden md:block rounded-full border border-blue-500/20 bg-slate-900/50 px-4 py-2 text-xs text-blue-200/80">Simulated Feed</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Gauge label="Thrust Output" unit="%" value={thrust} min={0} max={100} color="from-cyan-400 to-blue-500" />
          <Gauge label="O2 Saturation" unit="%" value={o2} min={80} max={100} color="from-emerald-400 to-cyan-500" />
          <Gauge label="Hull Integrity" unit="%" value={hull} min={70} max={100} color="from-indigo-400 to-violet-500" />
          <Gauge label="Engine Temp" unit="K" value={temp} min={250} max={500} color="from-rose-400 to-fuchsia-500" />
        </div>
      </div>
    </section>
  )
}

export default Vitals
