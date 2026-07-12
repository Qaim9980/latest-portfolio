import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — adds the `is-in` class to the returned ref once it enters
 * the viewport. Used to trigger CSS scroll-reveal animations.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in')
            setShown(true)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}
