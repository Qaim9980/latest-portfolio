import { useEffect, useRef } from 'react'
import { skills } from '../data'

function Bar({ value }) {
  return (
    <div className="skill-bar" aria-hidden="true">
      <span className="skill-bar__fill" style={{ '--w': `${value}%` }} />
    </div>
  )
}

function SkillItem({ name, value = 75 }) {
  return (
    <li className="skill" data-skill={value}>
      <span className="skill__name">{name}</span>
      <Bar value={value} />
    </li>
  )
}

// Pseudo-random but stable per-name levels so it looks honest
function levelFor(name) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff
  return 70 + (h % 28)  // 70..97
}

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el) } }),
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="brut-container">
        <div className="section-head">
          <div>
            <span className="eyebrow">FILE 03 / STACK</span>
            <h2 className="display">TOOLS I SHIP WITH.</h2>
          </div>
          <div className="section-head__num" style={{ color: 'var(--accent)' }}>// 03</div>
        </div>
        <div className="skills__grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div className="skills__col" key={cat}>
              <h4>{cat}</h4>
              <ul>
                {items.map((s) => <SkillItem key={s} name={s} value={levelFor(s)} />)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
