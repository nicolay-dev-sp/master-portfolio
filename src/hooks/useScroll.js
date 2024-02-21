import { useEffect } from 'react'

export function useScroll (selectedSection) {
  const scrollToSelectedSection = () => {
    if (selectedSection) {
      const contentElement = document.getElementById('content')
      const sectionElement = contentElement.querySelector(`#${selectedSection}`)
      if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(scrollToSelectedSection, [selectedSection])
}
