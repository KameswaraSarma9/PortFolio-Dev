import React, { useRef, useState, useEffect } from 'react'
import './Projects.css'

function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const projects = [
  {
    id: '01',
    featured: true,
    name: 'ResQNet',
    tagline: 'Real-Time Emergency Response Coordination System',
    category: 'Major Project · Final Year B.Tech',
    period: 'Jan 2026 – May 2026',
    description:
      'A mission-critical platform where citizens report emergencies and trained responders are dispatched in real-time. Built Socket.IO for live incident streaming, designed role-based dashboards for Admins and Responders, and engineered REST APIs for the full incident lifecycle — from report to resolution.',
    highlights: [
      'Live incident broadcasting via Socket.IO with sub-second latency',
      'Role-based access: Admin command center & Responder mobile view',
      'Full REST API suite for incident, user & dispatch management',
      'MVC backend on Express.js + Node.js with MongoDB persistence',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST API', 'MVC'],
    color: '#00f5d4',
    liveUrl: 'https://resqnett-five.vercel.app/',
    githubUrl: "https://github.com/KameswaraSarma9/PortFolio-Dev",
    icon: '🚨',
  },
  {
    id: '02',
    featured: false,
    name: 'LogiTrack',
    tagline: 'Logistics & Delivery Management System',
    category: 'Full Stack · Deployed',
    period: 'Mar 2025 – Present',
    description:
      'Production-ready delivery management system handling 2,000+ records with optimized MongoDB queries. Features real-time order tracking, intelligent driver assignment, and a multi-role admin dashboard — fully deployed on a free-tier stack of Vercel, Render, and MongoDB Atlas.',
    highlights: [
      'Three-role JWT auth system: Customer, Driver & Admin portals',
      '35% API response time boost via MongoDB indexing & geospatial queries',
      'Real-time delivery tracking with live status updates',
      'Zero-cost production deployment: Vercel + Render + MongoDB Atlas',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel', 'Render', 'Atlas'],
    color: '#7b2ff7',
    liveUrl: null,
    githubUrl: 'https://github.com/KameswaraSarma9',
    icon: '📦',
  },
  {
    id: '03',
    featured: false,
    name: 'FreelanceAI',
    tagline: 'AI-Based Freelancer Marketplace',
    category: 'Full Stack · Marketplace',
    period: '2025',
    description:
      'A full-stack freelancer marketplace supporting 1,000+ users and 5,000+ transactions. Built an intelligent job-matching system, streamlined bidding workflows, and achieved a 40% reduction in API latency through aggressive indexing and query optimization strategies.',
    highlights: [
      '40% API latency reduction via indexing & query optimization',
      'Full job posting, bidding & contract workflow engine',
      'Supports 1,000+ concurrent users & 5,000+ transaction records',
      'Separate responsive UIs for Clients and Freelancers',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'NumPy', 'Pandas', 'REST API'],
    color: '#f72ff7',
    liveUrl: null,
    githubUrl: 'https://github.com/KameswaraSarma9',
    icon: '🤖',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`pj-card ${inView ? 'pj-card--in' : ''} ${project.featured ? 'pj-card--featured' : ''}`}
      style={{ '--pjc': project.color, animationDelay: `${index * 0.12}s` }}
    >
      {/* Accent side bar */}
      <div className="pj-card__bar" />

      <div className="pj-card__inner">
        {/* Left: meta */}
        <div className="pj-card__meta">
          <div className="pj-card__num">{project.id}</div>
          <div className="pj-card__icon">{project.icon}</div>
          {project.featured && <div className="pj-card__featured-pill">★ Major Project</div>}
          <div className="pj-card__category">{project.category}</div>
          <div className="pj-card__period">{project.period}</div>

          {/* Action buttons */}
          <div className="pj-card__actions">
            <a
              href={project.liveUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className={`pj-btn pj-btn--live ${!project.liveUrl ? 'pj-btn--disabled' : ''}`}
              onClick={e => { if (!project.liveUrl) e.preventDefault() }}
            >
              <span className="pj-btn__dot" />
              {project.liveUrl ? 'Live Demo' : 'Coming Soon'}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pj-btn pj-btn--gh"
            >
              ◈ GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="pj-card__divider" />

        {/* Right: content */}
        <div className="pj-card__content">
          <h3 className="pj-card__name">{project.name}</h3>
          <p className="pj-card__tagline">{project.tagline}</p>
          <p className="pj-card__desc">{project.description}</p>

          <ul className="pj-card__highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>
                <span className="pj-card__bullet">▸</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="pj-card__tech">
            {project.tech.map(t => (
              <span key={t} className="pj-card__tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pj-card__glow" />
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <span className="tag">// projects</span>
        <h2 className={`section-title ${inView ? 'anim-up' : ''}`}>
          Things I've <span className="gradient-text">Built</span>
        </h2>

        <div className="pj-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
