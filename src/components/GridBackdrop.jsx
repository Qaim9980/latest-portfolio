import { useEffect, useRef } from 'react'

/**
 * GridBackdrop — fixed full-screen brutalist grid with a slow pulse
 * and a cursor-following highlight. Pointer-events disabled so it
 * never blocks interactions.
 */
export default function GridBackdrop() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let tx = mx
    let ty = my

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const tick = () => {
      mx += (tx - mx) * 0.12
      my += (ty - my) * 0.12
      el.style.setProperty('--mx', `${mx}px`)
      el.style.setProperty('--my', `${my}px`)
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="grid-backdrop" aria-hidden="true" />
}
