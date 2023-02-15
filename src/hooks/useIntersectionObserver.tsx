/* eslint-disable consistent-return */
import { useEffect } from 'react'

interface Props {
  root?: any
  target?: any
  onIntersect?: any
  threshold?: number
  rootMargin?: string
  enabled?: boolean | undefined
}

const useIntersectionObserver = ({
  root, // Ancestor of the target, 
  target, // Load more components will be the target
  onIntersect,
  threshold = 1.0, // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option
  rootMargin = '0px',
  enabled = true,
}: Props) => {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    )

    const el = target && target.current

    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.current, enabled])
}

export default useIntersectionObserver
