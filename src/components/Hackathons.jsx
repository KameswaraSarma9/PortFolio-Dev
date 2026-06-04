import React, { useRef, useState, useEffect } from 'react'
import './Hackathons.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const hackathons = [
  {
    name: 'Code Fusion Hackathon',
    org: 'Loyola College',
    place: '4th',
    year: '2024',
    role: 'Team Lead',
    icon: '🏆',
    color: '#f5c518',
    desc: 'Led a team of 4 among 50+ competing teams. Built and presented a working MERN stack prototype within 24 hours. Recognized for innovation, technical implementation, and presentation quality.',
    skills: ['MERN Stack', 'Team Leadership', '24hr Sprint', 'Full Stack'],
  },
  {
    name: 'Fountane Student Tribe',
    org: 'Fountane Inc.',
    place: 'Top 10',
    year: '2025',
    role: 'Team Lead',
    icon: '⚡',
    color: '#00f5d4',
    desc: 'Competed against 100+ teams and advanced to the final round. Managed sprint planning, task delegation, and final presentation across a 3-week competition cycle.',
    skills: ['Agile Sprint', 'Frontend Dev', 'Team Mgmt', 'Presentation'],
  },
]

export default function Hackathons() {
  const [ref, inView] = useInView()

  return (
    <section className="section hackathons" id="hackathons" ref={ref}>
      <div className="container">
        <span className="tag">// achievements</span>
        <h2 className={`section-title ${inView ? 'hack-in' : ''}`}>
          Hackathon <span className="gradient-text">Battleground</span>
        </h2>

        <div className="hackathons__grid">
          {hackathons.map((h, i) => (
            <div
              key={h.name}
              className={`hack-card ${inView ? 'hack-in' : ''}`}
              style={{ '--hc': h.color, animationDelay: `${i * 0.2}s` }}
            >
              <div className="hack-card__top">
                <div className="hack-card__icon">{h.icon}</div>
                <div className="hack-card__place-wrap">
                  <span className="hack-card__place" style={{ color: h.color }}>{h.place}</span>
                  <span className="hack-card__place-label">Place</span>
                </div>
              </div>

              <div className="hack-card__body">
                <h3 className="hack-card__name">{h.name}</h3>
                <div className="hack-card__meta">
                  <span className="hack-card__org">{h.org}</span>
                  <span className="hack-card__sep">·</span>
                  <span className="hack-card__year">{h.year}</span>
                  <span className="hack-card__sep">·</span>
                  <span className="hack-card__role" style={{ color: h.color }}>{h.role}</span>
                </div>
                <p className="hack-card__desc">{h.desc}</p>
              </div>

              <div className="hack-card__skills">
                {h.skills.map(s => (
                  <span key={s} className="hack-card__skill" style={{ borderColor: `${h.color}40`, color: h.color }}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="hack-card__glow" style={{ background: `radial-gradient(circle at 20% 80%, ${h.color}15, transparent 60%)` }} />
            </div>
          ))}
        </div>

        {/* Leadership stats */}
        <div className={`hack-stats ${inView ? 'hack-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          {[
            { val: '150+', label: 'Teams Competed Against' },
            { val: '2', label: 'Hackathons Entered' },
            { val: '2×', label: 'Team Lead Role' },
            { val: '48h+', label: 'Total Sprint Hours' },
          ].map(s => (
            <div key={s.label} className="hack-stat">
              <span className="hack-stat__val">{s.val}</span>
              <span className="hack-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
