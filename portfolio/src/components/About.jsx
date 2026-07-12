import { about } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [headRef] = useReveal()
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
          <div className="about__body reveal" style={{ animationDelay: '120ms' }}>
            {about.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="pillars">
            {about.pillars.map((p, i) => (
              <div className="pillar reveal" key={p.title} style={{ animationDelay: `${i * 110 + 180}ms` }}>
                <h3>{p.title} //</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
