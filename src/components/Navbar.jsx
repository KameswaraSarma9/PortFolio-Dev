import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Hackathons', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-hex">⬡</span>
          <span className="navbar__logo-text">KS</span>
        </div>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="navbar__link">
                <span className="navbar__link-num">{String(links.indexOf(l) + 1).padStart(2,'0')}.</span>
                {l}
              </button>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download className="navbar__resume-btn">
              Resume ↓
            </a>
          </li>
        </ul>

        <button className={`navbar__hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
