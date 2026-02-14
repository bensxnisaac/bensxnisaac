import { useEffect, useRef } from 'react'

export interface UseTitleOptions {
  append?: boolean
  siteName?: string
}

export function useTitle(title?: string, options?: UseTitleOptions) {
  const { append = true, siteName = 'Benson Isaac : Data & Business Analyst' } = options || {}
  const previousTitle = useRef<string>(typeof document !== 'undefined' ? document.title : '')

  useEffect(() => {
    const newTitle = title
      ? append
        ? `${title} — ${siteName}`
        : title
      : siteName

    document.title = newTitle

    return () => {
      document.title = previousTitle.current
    }
  }, [title, append, siteName])
}
