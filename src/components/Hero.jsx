import { profile } from '../data'
import { useMagnetic } from '../hooks/useMagnetic'

const lineA = ['AI']
const lineB = ['ENGINEER']
const lineC = ['/ BUILD']

function Split({ words, baseClass }) {
  return (
    <span className={`split-line ${baseClass ?? ''}`}>
      {words.map((w, i) => (
        <span className="split-word" key={`${w}-${i}`} style={{ animationDelay: `${i * 90}ms` }}>
          {w}
        </span>
      ))}
    </span>
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

export default function Hero() {
  const cta1 = useMagnetic(0.35)
  const cta2 = useMagnetic(0.35)

  return (
    <section className="hero" id="top">
      <h1 className="display hero__title">
        <Split words={lineA} baseClass="hero__title-a" />
        <Split words={lineB} baseClass="hero__title-b stroke" />
        <Split words={lineC} baseClass="hero__title-c fill-accent" />
      </h1>

      <div className="hero__meta">
        <span className="eyebrow shake">FILE 01 / HERO</span>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a ref={cta1} href="#projects" className="btn btn--accent magnetic">VIEW PROJECTS →</a>
          <a ref={cta2} href={resolveAsset(profile.resumeUrl)} className="btn btn--ghost magnetic">RESUME ↓</a>
        </div>
        <div className="mono hero__loc">
          {profile.location} <span className="sep">//</span> {profile.status}
          <span className="pulse-dot" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
