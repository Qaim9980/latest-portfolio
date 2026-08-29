import { experience } from '../data'

export default function Experience() {
  return (
    <section className="experience" id="experience">
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
            <div className="tl-row reveal" key={i} style={{ animationDelay: `${i * 110}ms` }}>
              <div className="tl-period">{e.period}</div>
              <div className="tl-body">
                <h3>{e.role}</h3>
                <h4>{e.org}</h4>
                <ul>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
