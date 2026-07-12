import { profile } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="brut-container nav__inner">
        <a href="#top" className="brand">
          <span className="brand__mark">AI</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav__links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">WORK</a>
          <a href="#experience">LOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a href="#contact" className="btn btn--accent nav__cta">
          {profile.status}
        </a>
      </div>
    </header>
  )
}
