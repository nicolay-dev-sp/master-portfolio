import { About } from '../About'
import { Projects } from '../Projects'
import './WrapperContent.css'
import { Studies } from '../Studies'
import { useScrollSelected } from '../../hooks/useScrollSelected'
import { useScrolledView } from '../../hooks/useScrolledView'

export function WrapperContent ({ selectedSection, handleSelectedSection }) {
  useScrollSelected(selectedSection)
  useScrolledView(handleSelectedSection)

  return (
    <>
      <article className='content' id='content'>
        <About selectedSection={selectedSection} id='about' />
        <Projects selectedSection={selectedSection} id='experience' />
        <Studies selectedSection={selectedSection} id='studies' />
      </article>
    </>
  )
}
