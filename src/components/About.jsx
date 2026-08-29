import { about, credentials, profile } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [headRef] = useReveal()
  const [bodyRef] = useReveal()
  const [dossierRef] = useReveal()
  const [p1Ref] = useReveal()
  const [p2Ref] = useReveal()
  const [p3Ref] = useReveal()

  return (
    <section className="about" id="about">
      <div className="brut-container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="eyebrow">FILE 02 / DOSSIER</span>
            <h2 className="display">{about.heading}</h2>
          </div>
          <div className="section-head__num">// 02</div>
        </div>

        <div className="about__grid">
          <div className="about__body reveal" ref={bodyRef} style={{ animationDelay: '120ms' }}>
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Developer Dossier / Credentials Box */}
            <div className="dossier-card reveal" ref={dossierRef} style={{ animationDelay: '200ms' }}>
              <div className="dossier-card__head">
                <span className="dossier-card__tag">VERIFIED CREDENTIALS</span>
                <span className="dossier-card__id">{profile.name} // AI-DEV-01</span>
              </div>

              <div className="dossier-card__content">
                <div className="dossier-section">
                  <div className="dossier-label">ACADEMIC FOUNDATION</div>
                  <div className="dossier-edu">
                    <div className="dossier-edu__degree">{credentials.education.degree}</div>
                    <div className="dossier-edu__inst">{credentials.education.institution}</div>
                    <div className="dossier-edu__meta">
                      <span className="dossier-badge dossier-badge--accent">CGPA: {credentials.education.cgpa}</span>
                      <span className="dossier-badge">{credentials.education.period}</span>
                    </div>
                  </div>
                </div>

                <div className="dossier-section">
                  <div className="dossier-label">PROFESSIONAL CERTIFICATIONS</div>
                  <div className="dossier-certs">
                    {credentials.certifications.map((cert) => (
                      <div className="cert-item" key={cert.name}>
                        <span className="cert-item__badge">{cert.badge}</span>
                        <div className="cert-item__text">
                          <div className="cert-item__name">{cert.name}</div>
                          <div className="cert-item__issuer">{cert.issuer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dossier-section">
                  <div className="dossier-label">LANGUAGES &amp; COMMUNITY</div>
                  <div className="dossier-tags">
                    {credentials.languages.map((l) => (
                      <span className="dossier-chip" key={l.name}>
                        <strong>{l.name}</strong>: {l.level}
                      </span>
                    ))}
                    <span className="dossier-chip dossier-chip--highlight">
                      LeetCode Algorithmic Guidance on LinkedIn
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pillars">
            {[p1Ref, p2Ref, p3Ref].map((ref, i) => (
              <div
                className="pillar reveal"
                ref={ref}
                key={about.pillars[i].title}
                style={{ animationDelay: `${i * 110 + 180}ms` }}
              >
                <h3>{about.pillars[i].title} //</h3>
                <p>{about.pillars[i].text}</p>
                <a href="#projects" className="btn btn--ghost pillar__btn">
                  VIEW PROJECTS →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
