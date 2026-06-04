import React, { useEffect, useRef } from 'react'

export default function GridBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const gridSize = 60
      ctx.lineWidth = 0.4

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const alpha = 0.03 + 0.02 * Math.sin(y * 0.01 + t * 0.5)
        ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const alpha = 0.03 + 0.02 * Math.sin(x * 0.01 + t * 0.5)
        ctx.strokeStyle = `rgba(123, 47, 247, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Floating orbs
      const orbs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2, r: 200, c: '0,245,212', t: t * 0.3 },
        { x: canvas.width * 0.85, y: canvas.height * 0.15, r: 280, c: '123,47,247', t: t * 0.2 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, r: 240, c: '247,47,247', t: t * 0.25 },
      ]
      orbs.forEach(o => {
        const px = o.x + Math.sin(o.t) * 30
        const py = o.y + Math.cos(o.t * 0.7) * 20
        const grad = ctx.createRadialGradient(px, py, 0, px, py, o.r)
        grad.addColorStop(0, `rgba(${o.c}, 0.06)`)
        grad.addColorStop(1, `rgba(${o.c}, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(px, py, o.r, 0, Math.PI * 2)
        ctx.fill()
      })

      t += 0.01
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', opacity: 0.8
      }}
    />
  )
}
