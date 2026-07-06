import React, { useEffect, useRef, useState } from 'react'
import './About.css'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const timeline = [
  { year: '2020', label: 'Completed 10th', school: 'St. Andrews School (CBSE)', grade: '75.2%' },
  { year: '2022', label: 'Completed Intermediate', school: 'Deeksha Junior College', grade: '87.6%' },
  { year: '2022', label: 'Started B.Tech', school: 'SMEC Hyderabad (JNTUH)', grade: 'CGPA 8.35' },
  { year: '2026', label: 'Graduating B.Tech', school: 'Computer Science Engineering' },
]

export default function About() {
  const [ref, inView] = useInView()
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <span className="tag">// about me</span>
        <h2 className={`section-title ${inView ? 'animate-in' : ''}`}>
          The <span className="gradient-text">Story</span> Behind the Code
        </h2>

        <div className="about__grid">
          <div className={`about__text ${inView ? 'animate-in' : ''}`} style={{animationDelay:'0.1s'}}>
            <p>
              I'm <strong>Renduchintala Venkata Kameswara Sarma</strong>, a final-year Computer Science 
              student at St. Martin's Engineering College, Hyderabad. With a CGPA of <span className="highlight">8.35/10</span>, 
              I've channeled my academic foundation into real-world engineering.
            </p>
            <p>
              My journey began with curiosity about how the web works — it turned into a passion for building 
              full-stack applications that solve real problems. From real-time emergency coordination systems 
              to AI-powered marketplaces, I love creating software that matters.
            </p>
            <p>
              I compete in hackathons to sharpen my execution speed, contribute on GitHub to build in public, 
              and grind LeetCode to stay sharp on fundamentals. I'm seeking a 
              <span className="highlight"> Software Engineer role</span> where I can grow fast and ship faster.
            </p>
            <div className="about__links">
              <a href="https://linkedin.com/in/kameswarasarma" target="_blank" rel="noreferrer" className="about__link">
                <span>↗</span> LinkedIn
              </a>
              <a href="https://github.com/KameswaraSarma9" target="_blank" rel="noreferrer" className="about__link">
                <span>↗</span> GitHub
              </a>
              <a href="https://leetcode.com/u/rvkameswarasarma" target="_blank" rel="noreferrer" className="about__link">
                <span>↗</span> LeetCode
              </a>
            </div>
          </div>

          <div className={`about__timeline ${inView ? 'animate-in' : ''}`} style={{animationDelay:'0.25s'}}>
            <h3 className="about__timeline-title">Education Timeline</h3>
            {timeline.map((item, i) => (
              <div key={i} className="about__timeline-item" style={{animationDelay:`${0.1*i}s`}}>
                <div className="about__timeline-year">{item.year}</div>
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <div className="about__timeline-label">{item.label}</div>
                  <div className="about__timeline-school">{item.school}</div>
                  <div className="about__timeline-grade">{item.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
