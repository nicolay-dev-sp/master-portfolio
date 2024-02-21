import { About } from '../About'
import { Projects } from '../Projects'
import './WrapperContent.css'
import { Studies } from '../Studies'
import { useScroll } from '../../hooks/useScroll'
import { Footer } from '../../utils/Footer/Footer'

export function WrapperContent ({ selectedSection }) {
  useScroll(selectedSection)

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
