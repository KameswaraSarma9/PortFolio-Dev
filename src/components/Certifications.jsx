import React, { useRef, useState, useEffect } from 'react'
import './Certifications.css'

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

const certs = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL — IIT Kharagpur ',
    badge: 'Elite Category',
    badgeColor: '#f5c518',
    icon: '☕',
    desc: 'Earned Elite distinction in NPTEL\'s rigorous Java programming course from IIT — covering OOP, data structures, algorithms, and advanced Java concepts.',
    skills: ['Java', 'OOP', 'Data Structures', 'IIT Certified'],
  },
  {
    title: 'Git & GitHub',
    issuer: 'NxtWave — Developer Foundations',
    badge: 'Certified',
    badgeColor: '#00f5d4',
    icon: '🌿',
    desc: 'Comprehensive version control training covering branching strategies, collaborative workflows, pull requests, and professional Git practices.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
  },
  {
    title: 'Programming with Python',
    issuer: 'NxtWave — Developer Foundations',
    badge: 'Certified',
    badgeColor: '#7b2ff7',
    icon: '🐍',
    desc: 'Python fundamentals through advanced topics including data manipulation with NumPy & Pandas, scripting, and backend development concepts.',
    skills: ['Python', 'NumPy', 'Pandas', 'Scripting'],
  },
  {
    title: 'Introduction to Databases',
    issuer: 'NxtWave — Developer Foundations',
    badge: 'Certified',
    badgeColor: '#f72ff7',
    icon: '🗄️',
    desc: 'Database design fundamentals covering relational models, SQL queries, normalization, indexing, and modern NoSQL concepts.',
    skills: ['SQL', 'Database Design', 'DBMS', 'Normalization'],
  },
]

export default function Certifications() {
  const [ref, inView] = useInView()
  return (
    <section className="section certs" id="certifications" ref={ref}>
      <div className="container">
        <span className="tag">// certifications</span>
        <h2 className={`section-title ${inView ? 'cert-in' : ''}`}>
          Verified <span className="gradient-text">Credentials</span>
        </h2>

        <div className="certs__grid">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card ${inView ? 'cert-in' : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="cert-card__top">
                <span className="cert-card__icon">{c.icon}</span>
                <span className="cert-card__badge" style={{ color: c.badgeColor, borderColor: `${c.badgeColor}50` }}>
                  {c.badge}
                </span>
              </div>
              <h3 className="cert-card__title">{c.title}</h3>
              <p className="cert-card__issuer">{c.issuer}</p>
              <p className="cert-card__desc">{c.desc}</p>
              <div className="cert-card__skills">
                {c.skills.map(s => (
                  <span key={s} className="cert-card__skill">{s}</span>
                ))}
              </div>
              <div className="cert-card__line" style={{ background: `linear-gradient(90deg, ${c.badgeColor}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
