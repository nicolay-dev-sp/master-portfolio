import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { Footer } from './utils/Footer/Footer'
import './App.css'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import { useState } from 'react'

export function App () {
  const [selectedSection, setSelectedSection] = useState(null)
  const [activeScroll, setActiveScroll] = useState(false)

  const handleSelectedSection = (section) => {
    setSelectedSection(section)
  }
  const handleScroll = () => {
    setActiveScroll(true)
  }

  return (
    <>
      <main className='main-container'>
        <header className='basic-info-header'>
          <ResumeCard />
          <Navigation handleSelectedSection={handleSelectedSection} />
          <SocialLinks />
        </header>
        <section className={`content-section ${activeScroll ? 'active-scroll' : 'inactive-scroll'}`} onScroll={handleScroll}>
          <WrapperContent selectedSection={selectedSection} />
          <Footer />
        </section>
      </main>
    </>
  )
}
