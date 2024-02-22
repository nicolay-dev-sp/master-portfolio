import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { Footer } from './utils/Footer/Footer'
import './App.css'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import React, { useState } from 'react'

export function App () {
  const [selectedSection, setSelectedSection] = useState(null)

  const handleSelectedSection = (section) => {
    setSelectedSection(section)
  }

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
