import { about } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [headRef] = useReveal()
  const [bodyRef] = useReveal()
  const [p1Ref] = useReveal()
  const [p2Ref] = useReveal()
  const [p3Ref] = useReveal()

  return (
    <section className="about" id="about">
      <div className="brut-container">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <span className="eyebrow">FILE 02 / ABOUT</span>
            <h2 className="display">{about.heading}</h2>
          </div>
          <div className="section-head__num">// 02</div>
        </div>
        <div className="about__grid">
          <div className="about__body reveal" ref={bodyRef} style={{ animationDelay: '120ms' }}>
            {about.body.map((p, i) => <p key={i}>{p}</p>)}
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
