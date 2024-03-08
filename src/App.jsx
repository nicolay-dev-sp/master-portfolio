import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { Footer } from './utils/Footer/Footer'
import './App.css'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import { useEffect } from 'react'

export function App () {
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
      <section className='main-container'>
        <header className='basic-info-header'>
          <ResumeCard />
          <Navigation />
          <SocialLinks />
        </header>
        <main className='content-section'>
          <WrapperContent />
          <Footer />
        </main>
      </section>
    </>
  )
}
