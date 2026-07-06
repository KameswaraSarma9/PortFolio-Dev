import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Backend Architect',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIndex]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero__hex-grid">
        {Array.from({length: 18}).map((_, i) => (
          <div key={i} className="hero__hex" style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="hero__content container">
        <div className="hero__left">
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span className="tag">Available for opportunities</span>
          </div>

          <div className="hero__greeting">Hello, I'm</div>

          <h1 className="hero__name">
            <span>Kameswara</span>
            <span className="gradient-text">Sarma</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">{'<'}</span>
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor-blink">|</span>
            <span className="hero__role-suffix">{'/>'}</span>
          </div>

          <p className="hero__bio">
            Computer Science undergraduate at St.Martins Engineering College Hyderabad. I architect full-stack solutions
            using the MERN stack — from real-time emergency systems to AI-powered marketplaces.
            I write clean code, ship fast, and build things that scale.
          </p>

          <div className="hero__cta">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('projects')}>
              <span>View Projects</span>
              <span className="hero__btn-arrow">→</span>
            </button>
            <button className="hero__btn hero__btn--outline" onClick={() => scrollTo('contact')}>
              Let's Connect
            </button>
          </div>

          <div className="hero__stats">
            {[
              { val: '8.35', label: 'CGPA', suffix: '/10' },
              { val: '3+', label: 'Projects', suffix: '' },
              { val: '2', label: 'Hackathons', suffix: '' },
              { val: '2026', label: 'Graduating', suffix: '' },
            ].map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-val">{s.val}<span className="hero__stat-suffix">{s.suffix}</span></span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-rings">
              <div className="ring ring1" />
              <div className="ring ring2" />
              <div className="ring ring3" />
            </div>
            <div className="hero__avatar">
              <img src="/profile.jpg" alt="Kameswara Sarma" className="hero__avatar-photo" />
            </div>
            <div className="hero__badges">
              <div className="hero__badge" style={{top:'10%', right:'-5%'}}>
                <span>⚛</span> React
              </div>
              <div className="hero__badge" style={{bottom:'20%', right:'-8%'}}>
                <span>🟢</span> Node.js
              </div>
              <div className="hero__badge" style={{bottom:'5%', left:'5%'}}>
                <span>🍃</span> MongoDB
              </div>
              <div className="hero__badge" style={{top:'35%', left:'-10%'}}>
                <span>☕</span> Java
              </div>
            </div>
          </div>

          <div className="hero__code-card">
            <div className="hero__code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="hero__code-title">profile.js</span>
            </div>
            <pre className="hero__code-body">{`const developer = {
  name: "Kameswara Sarma",
  stack: ["MERN", "Java", "SQL"],
  cgpa: 8.35,
  location: "Hyderabad, IN",
  status: "open_to_work",
  passion: "building things"
}`}</pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
