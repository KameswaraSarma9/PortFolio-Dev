import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">⬡ KS</span>
          <p className="footer__copy">
            Designed & Built by <span className="footer__name">Kameswara Sarma</span>
          </p>
          <p className="footer__stack">React · Vite · Framer Motion · Deployed on Vercel</p>
        </div>
        <div className="footer__right">
          <p className="footer__quote">
            <span className="footer__quote-mark">"</span>
            Code is poetry. Ship it.
            <span className="footer__quote-mark">"</span>
          </p>
        </div>
      </div>
      <div className="footer__glow-line" />
    </footer>
  )
}
