import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'
import { useCountUp } from '../hooks/useCountUp'

// Animated numeric stat (e.g. "10+", "95%")
function NumericValue({ prefix, target, suffix, decimals, duration = 1600 }) {
  const ref = useRef(null)
  const [start, setStart] = useState(false)
  const animated = useCountUp(target, { start, duration, decimals })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setStart(true); return }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setStart(true); io.unobserve(el) } }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="stat__v" ref={ref}>
      {prefix}<span className="counter">{animated}</span>{suffix}
    </div>
  )
}

// Plain text stat (e.g. "BS AI")
function TextValue({ value }) {
  const ref = useRef(null)
  return <div className="stat__v" ref={ref}>{value}</div>
}

function AnimatedValue({ value }) {
  const m = String(value).match(/^([^0-9.]*)([0-9]*\.?[0-9]+)(.*)$/)
  if (!m) return <TextValue value={value} />
  const [, prefix, num, suffix] = m
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return <NumericValue prefix={prefix} target={parseFloat(num)} suffix={suffix} decimals={decimals} />
}

export default function Stats() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { el.classList.add('is-in'); return }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el) } }),
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref} style={{ padding: 0 }}>
      <div className="stats__grid">
        {stats.map((s, i) => (
          <div className="stat stat--anim" key={s.label} style={{ transitionDelay: `${i * 90}ms` }}>
            <AnimatedValue value={s.value} />
            <div className="stat__l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
