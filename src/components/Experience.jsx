import { useEffect, useRef } from 'react'
import { experience } from '../data'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    const reveals = el.querySelectorAll('.reveal')
    reveals.forEach((r) => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="brut-container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">FILE 05 / LOG</span>
            <h2 className="display">EXPERIENCE LOG.</h2>
          </div>
          <div className="section-head__num">// 05</div>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <div
              className="tl-row reveal"
              key={i}
              style={{ '--reveal-delay': `${i * 120}ms`, transitionDelay: `${i * 120}ms` }}
            >
              <div className="tl-period">{e.period}</div>
              <div className="tl-body">
                <h3>{e.role}</h3>
                <h4>{e.org}</h4>
                <ul>
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
