import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brut-container footer__inner">
        <div>© {new Date().getFullYear()} {profile.name} — AI ENGINEER</div>
      </div>
    </footer>
  )
}
