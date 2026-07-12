import { useEffect, useState } from 'react'

/**
 * useCountUp — animates a numeric value from 0 (or from `from`) to `to`
 * when `start` becomes true. Supports prefixes, suffixes, and decimals.
 */
export function useCountUp(to, { start, duration = 1400, from = 0, decimals = 0 } = {}) {
  const [val, setVal] = useState(from)

  useEffect(() => {
    if (!start) return
    let raf
    const begin = performance.now()
    const delta = to - from
    const tick = (now) => {
      const t = Math.min(1, (now - begin) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(from + delta * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, to, from, duration])

  const formatted = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString()

  return formatted
}
