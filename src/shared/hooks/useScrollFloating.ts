import { useEffect, useState } from 'react'

export function useScrollFloating(
  target: React.MutableRefObject<HTMLElement | null>,
  options?: {
    threshold: number
  }
) {
  options = Object.assign({ threshold: 50 }, options)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    let timer: number,
      lastScrollTop = target.current?.scrollTop || 0

    const onScroll = (e: any) => {
      let distance = e.target.scrollTop - lastScrollTop
      if (Math.abs(distance) < options!.threshold) return
      setVisible(distance < 0)
      lastScrollTop = e.target.scrollTop
    }

    const _onScroll = (e: any) => {
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        onScroll(e)
      }, 100)
    }

    target.current?.addEventListener('scroll', _onScroll)
    return () => target.current?.removeEventListener('scroll', _onScroll)
  }, [target])

  return { visible }
}
