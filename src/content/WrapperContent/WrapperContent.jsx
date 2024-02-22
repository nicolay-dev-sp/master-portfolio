import { About } from '../About'
import { Projects } from '../Projects'
import './WrapperContent.css'
import { Studies } from '../Studies'
import { useScroll } from '../../hooks/useScroll'
import { useEffect, useState } from 'react'

export function WrapperContent ({ selectedSection, handleSelectedSection }) {
  const [sectionOnView, setSectionOnView] = useState('about')
  let timeoutId = null

  const getVisibleSection = () => {
    const content = document.getElementById('content')
    const contentRect = content.getBoundingClientRect()
    const children = content.querySelectorAll('main')
    const childrenArray = [...children]
    const visibleSection = childrenArray.find((child) => {
      const childRect = child.getBoundingClientRect()
      return childRect.top >= contentRect.top
    }).id
    visibleSection ? setSectionOnView(visibleSection) : setSectionOnView('')
  }

  const debounceGetVisibleSection = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(getVisibleSection, 300)
  }

  useScroll(selectedSection)

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

  return (
    <>
      <main className='content' id='content'>
        <About selectedSection={selectedSection} id='about' />
        <Projects selectedSection={selectedSection} id='experience' />
        <Studies selectedSection={selectedSection} id='studies' />
      </main>
    </>
  )
}
