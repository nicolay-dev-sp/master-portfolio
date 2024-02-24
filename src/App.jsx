import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { Footer } from './utils/Footer/Footer'
import './App.css'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import { useState, useEffect } from 'react'

export function App () {
  const [selectedSection, setSelectedSection] = useState(null)

  const handleSelectedSection = (section) => {
    setSelectedSection(section)
  }

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

  return (
    <>
      <main className='main-container'>
        <header className='basic-info-header'>
          <ResumeCard />
          <Navigation selectedSection={selectedSection} handleSelectedSection={handleSelectedSection} />
          <SocialLinks />
        </header>
        <section className='content-section'>
          <WrapperContent selectedSection={selectedSection} handleSelectedSection={handleSelectedSection} />
          <Footer />
        </section>
      </main>
    </>
  )
}
