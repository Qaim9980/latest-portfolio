import { useEffect, useRef } from 'react'
import { contact, profile } from '../data'

export default function Contact() {
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
    <section className="contact" id="contact" ref={ref}>
      <div className="brut-container">
        <div className="contact__grid">
          <div>
            <span className="eyebrow">FILE 06 / END</span>
            <h2 className="display">{contact.heading}</h2>
            <p style={{ fontSize: 18, marginTop: 24, maxWidth: '40ch' }}>{contact.sub}</p>
            <a href={`mailto:${profile.email}`} className="btn" style={{ marginTop: 28 }}>
              {contact.cta} →
            </a>
          </div>
          <div className="contact__panel">
            {profile.email && (
              <a href={`mailto:${profile.email}`}>
                EMAIL ↗ {profile.email}
              </a>
            )}
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
                PHONE ↗ {profile.phone}
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GITHUB ↗ {profile.github.replace(/^https?:\/\//i, '')}
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LINKEDIN ↗ {profile.linkedin.replace(/^https?:\/\/(www\.)?/i, '')}
              </a>
            )}
            {profile.twitter && (
              <a href={profile.twitter} target="_blank" rel="noreferrer">
                TWITTER / X ↗ {profile.twitter.replace(/^https?:\/\/(www\.)?/i, '')}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
