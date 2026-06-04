import React, { useRef, useState, useEffect } from 'react'
import './Skills.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const categories = [
  {
    label: 'Languages',
    accent: '#00f5d4',
    items: [
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Java', icon: 'Jv' },
      { name: 'Python', icon: 'Py' },
      { name: 'C', icon: 'C' },
      { name: 'HTML', icon: 'HT' },
      { name: 'CSS', icon: 'CS' },
      { name: 'SQL', icon: 'SQ' },
    ],
  },
  {
    label: 'MERN Stack',
    accent: '#7b2ff7',
    items: [
      { name: 'React.js', icon: '⚛' },
      { name: 'Node.js', icon: '⬡' },
      { name: 'Express.js', icon: 'Ex' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'REST APIs', icon: '↔' },
      { name: 'JWT Auth', icon: '🔐' },
      { name: 'Socket.IO', icon: '⚡' },
    ],
  },
  {
    label: 'Tools',
    accent: '#f72ff7',
    items: [
      { name: 'Git', icon: '⎇' },
      { name: 'GitHub', icon: '◈' },
      { name: 'VS Code', icon: '◧' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Render', icon: '◎' },
      { name: 'MongoDB Atlas', icon: '☁' },
      { name: 'Bootstrap', icon: 'Bs' },
    ],
  },
  {
    label: 'CS Core',
    accent: '#f5c518',
    items: [
      { name: 'DSA', icon: '∑' },
      { name: 'OOP', icon: '◉' },
      { name: 'DBMS', icon: '🗄' },
      { name: 'OS', icon: '💻' },
      { name: 'Networks', icon: '🌐' },
      { name: 'System Design', icon: '⚙' },
      { name: 'Agile', icon: '🔄' },
    ],
  },
  {
    label: 'Data & Analytics',
    accent: '#ff6b35',
    items: [
      { name: 'NumPy', icon: 'Np' },
      { name: 'Pandas', icon: 'Pd' },
      { name: 'Scikit-learn', icon: 'Sk' },
      { name: 'Tableau', icon: 'Tb' },
      { name: 'Power BI', icon: 'BI' },
      { name: 'MySQL', icon: 'My' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <span className="tag">// tech stack</span>
        <h2 className={`section-title ${inView ? 'anim-up' : ''}`}>
          Tools of the <span className="gradient-text">Trade</span>
        </h2>

        {/* Category tabs */}
        <div className="sk-tabs">
          {categories.map((c, i) => (
            <button
              key={c.label}
              className={`sk-tab ${active === i ? 'sk-tab--active' : ''}`}
              style={{ '--ac': c.accent }}
              onClick={() => setActive(i)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        <div className="sk-grid">
          {categories[active].items.map((item, i) => (
            <div
              key={item.name}
              className={`sk-card ${inView ? 'sk-card--in' : ''}`}
              style={{
                '--ac': categories[active].accent,
                animationDelay: `${i * 0.06}s`,
              }}
            >
              <div className="sk-card__icon">{item.icon}</div>
              <span className="sk-card__name">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Passive "also familiar" strip */}
        <p className="sk-note">
          Also familiar with: Microservices · Caching · Load Balancing · CAP Theorem · HLD · LLD
        </p>
      </div>
    </section>
  )
}
