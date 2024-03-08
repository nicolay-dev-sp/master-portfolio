import { useEffect } from 'react'

export function useMouseBackground () {
  const mouseBgEffect = (event) => {
    document.documentElement.style.setProperty('--position', `${event.clientX}px ${event.clientY}px`)
  }

  const handleMouseMovement = () => {
    window.addEventListener('mousemove', mouseBgEffect)

    return () => {
      window.removeEventListener('mousemove', mouseBgEffect)
    }
  }

  useEffect(handleMouseMovement, [])
}
