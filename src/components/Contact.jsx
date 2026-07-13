import React, { useRef, useState, useEffect } from 'react'
import './Contact.css'

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const contactLinks = [
  {
    label: 'Email',
    value: 'sarmavenkata123@gmail.com',
    href: 'mailto:sarmavenkata123@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: '#00f5d4',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kameswarasarma',
    href: 'https://linkedin.com/in/rvkameswarasarma',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/KameswaraSarma9',
    href: 'https://github.com/KameswaraSarma9',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    color: '#e6edf3',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/rvkameswarasarma/',
    href: 'https://leetcode.com/u/rvkameswarasarma/',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    color: '#ffa116',
  },
  {
    label: 'Phone',
    value: '+91 8790073311',
    href: 'tel:+918790073311',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.2a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.02-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#7b2ff7',
  },
  {
    label: 'Location',
    value: 'Hyderabad, India',
    href: 'https://maps.google.com/?q=Hyderabad,India',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: '#f72ff7',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Kameswara,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.open(`mailto:sarmavenkata123@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <span className="tag">// contact</span>
        <h2 className={`section-title ${inView ? 'ct-in' : ''}`}>
          Let's <span className="gradient-text">Work Together</span>
        </h2>

        <p className={`ct-lead ${inView ? 'ct-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          I'm actively seeking Software Engineer opportunities. Whether you have a role, a project, 
          or just want to connect — I'd love to hear from you.
        </p>

        <div className="ct-grid">

          {/* ── Left: links ── */}
          <div className={`ct-links ${inView ? 'ct-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <p className="ct-links__label">Find me on</p>

            {contactLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer noopener' : undefined}
                className="ct-link"
                style={{ '--lc': l.color, animationDelay: `${0.05 * i}s` }}
              >
                <span className="ct-link__icon">{l.icon}</span>
                <span className="ct-link__body">
                  <span className="ct-link__label">{l.label}</span>
                  <span className="ct-link__value">{l.value}</span>
                </span>
                {l.external && (
                  <span className="ct-link__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M7 7h10v10"/>
                    </svg>
                  </span>
                )}
              </a>
            ))}

            <a href="/resume.pdf" download className="ct-resume">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:'18px',height:'18px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* ── Right: form ── */}
          <div className={`ct-form-wrap ${inView ? 'ct-in' : ''}`} style={{ animationDelay: '0.32s' }}>
            <div className="ct-form-header">
              <span className="ct-form-dot ct-form-dot--r" />
              <span className="ct-form-dot ct-form-dot--y" />
              <span className="ct-form-dot ct-form-dot--g" />
              <span className="ct-form-title">message.send()</span>
            </div>
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-field">
                <label className="ct-label">Name</label>
                <input type="text" required className="ct-input" placeholder="Your name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="ct-field">
                <label className="ct-label">Email</label>
                <input type="email" required className="ct-input" placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea required rows={5} className="ct-input ct-textarea"
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className={`ct-submit ${sent ? 'ct-submit--sent' : ''}`}>
                {sent
                  ? <><span>✓</span> Opening mail client…</>
                  : <><span>Send Message</span><span className="ct-submit__arrow">→</span></>
                }
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
