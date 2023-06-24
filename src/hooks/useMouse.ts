import { useEffect, useCallback, useState } from 'react'

function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return { x, y }
}

export default useMouse
