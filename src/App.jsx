import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'

export default function App() {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (cursorRingRef.current) {
        setTimeout(() => {
          cursorRingRef.current.style.left = e.clientX + 'px'
          cursorRingRef.current.style.top = e.clientY + 'px'
        }, 80)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
