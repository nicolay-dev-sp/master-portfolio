import { useEffect, useState } from 'react'

export function useScrolledView (handleSelectedSection) {
  const [sectionOnView, setSectionOnView] = useState('about')

  let timeoutId = null

  const getVisibleSection = () => {
    const children = document.getElementById('content').children
    const childrenArray = [...children]
    const visibleSection = childrenArray.find((child) => {
      return child.getBoundingClientRect().top >= 0
    }).id
    setSectionOnView(visibleSection)
  }

  const debounceGetVisibleSection = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(getVisibleSection, 600)
  }

  useEffect(() => {
    const content = document.getElementById('content')
    content.addEventListener('scroll', debounceGetVisibleSection)

    return () => {
      window.removeEventListener('scroll', debounceGetVisibleSection)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    handleSelectedSection(sectionOnView)
  }, [sectionOnView])
}
