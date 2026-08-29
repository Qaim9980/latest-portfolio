import { useRef, useState } from 'react'
import { projects } from '../data'

function TiltCard({ children, index }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * 4   // degrees
    const ry = (px - 0.5) * 5   // degrees
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return (
    <article
      ref={ref}
      className="project tilt"
      style={{ animationDelay: `${index * 90}ms` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </article>
  )
}

function resolveAsset(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url
  return `${cleanBase}${cleanUrl}`
}

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false)
  const detailsRef = useRef(null)
  const hasDetails = !!p.details

  const toggle = () => {
    if (!hasDetails) return
    setOpen((v) => {
      const next = !v
      // after the open transition starts, scroll the case study into view
      if (next) {
        requestAnimationFrame(() => {
          detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
      return next
    })
  }

  return (
    <TiltCard index={i}>
      <div className="project__n">{p.n}</div>
      <div className="project__main">
        <div className="project__title-row">
          <h3 className="project__title">{p.title}</h3>
          {p.level && <span className="project__level">{p.level}</span>}
        </div>
        <p className="project__blurb">{p.blurb}</p>
        <div className="project__stack">
          {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
      </div>
      <div className="project__metrics">
        {p.metrics.map((m) => (
          <div className="metric" key={m.l}>
            <div className="metric__v">{m.v}</div>
            <div className="metric__l">{m.l}</div>
          </div>
        ))}
        {hasDetails ? (
          <button
            type="button"
            className="btn project__toggle"
            aria-expanded={open}
            aria-controls={`case-${p.n}`}
            onClick={toggle}
            style={{ marginTop: 8, padding: '10px 16px', fontSize: 12 }}
          >
            {open ? 'HIDE CASE STUDY ▲' : 'CASE STUDY →'}
          </button>
        ) : (
          <a className="btn" href={p.link} style={{ marginTop: 8, padding: '10px 16px', fontSize: 12 }}>
            CASE STUDY →
          </a>
        )}
      </div>
      {p.cover && (
        <figure className="project__cover">
          <img src={resolveAsset(p.cover)} alt={`${p.title} workflow diagram`} loading="lazy" />
        </figure>
      )}
      {hasDetails && (
        <div
          id={`case-${p.n}`}
          ref={detailsRef}
          className={`project__details ${open ? 'is-open' : 'is-closed'}`}
          aria-hidden={!open}
        >
          <div className="case-study">
            <header className="case-study__head">
              <span className="case-study__eyebrow">// CASE STUDY</span>
              <h4 className="case-study__title">{p.title}</h4>
              <span className="case-study__meta">DEEP DIVE  ·  {p.stack.length} STACK PIECES  ·  {p.metrics.length} METRICS</span>
            </header>

            <div className="case-study__grid">
              {p.details.problem && (
                <section className="cs-card cs-card--problem">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">⚠</span>
                    <span className="cs-card__label">PROBLEM</span>
                  </div>
                  <p className="cs-card__body">{p.details.problem}</p>
                </section>
              )}

              {p.details.goal && (
                <section className="cs-card cs-card--goal">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">◎</span>
                    <span className="cs-card__label">GOAL</span>
                  </div>
                  <p className="cs-card__body">{p.details.goal}</p>
                </section>
              )}

              {p.details.workflow && (
                <section className="cs-card cs-card--workflow">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">↻</span>
                    <span className="cs-card__label">WORKFLOW</span>
                    <span className="cs-card__count">{p.details.workflow.length} STEPS</span>
                  </div>
                  <ol className="cs-steps">
                    {p.details.workflow.map((step, j) => (
                      <li className="cs-step" key={j}>
                        <span className="cs-step__num">{String(j + 1).padStart(2, '0')}</span>
                        <span className="cs-step__text">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {p.details.features && (
                <section className="cs-card cs-card--features">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">★</span>
                    <span className="cs-card__label">KEY FEATURES</span>
                    <span className="cs-card__count">{p.details.features.length}</span>
                  </div>
                  <ul className="cs-bullets">
                    {p.details.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </section>
              )}

              {p.details.results && (
                <section className="cs-card cs-card--results">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">▲</span>
                    <span className="cs-card__label">RESULTS</span>
                    <span className="cs-card__count">{p.details.results.length}</span>
                  </div>
                  <ul className="cs-bullets cs-bullets--accent">
                    {p.details.results.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </section>
              )}

              {p.details.architecture && (
                <section className="cs-card cs-card--arch">
                  <div className="cs-card__head">
                    <span className="cs-card__icon" aria-hidden="true">▣</span>
                    <span className="cs-card__label">ARCHITECTURE</span>
                  </div>
                  <pre className="cs-arch">{p.details.architecture}</pre>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
      <span className="tilt__glare" aria-hidden="true" />
    </TiltCard>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="brut-container">
        <div className="section-head">
          <div>
            <span className="eyebrow">FILE 04 / WORK</span>
            <h2 className="display">SELECTED PROJECTS.</h2>
          </div>
          <div className="section-head__num">// 04</div>
        </div>
        <div className="projects__list">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

