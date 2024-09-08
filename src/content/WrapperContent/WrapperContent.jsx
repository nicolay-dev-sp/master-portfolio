import { About } from '../About'
import { Experience } from '../Experience'
import './WrapperContent.css'
import { Studies } from '../Studies'
import { useScrollSelected } from '../../hooks/useScrollSelected'
import { useScrolledView } from '../../hooks/useScrolledView'
import { Projects } from '../Projects'

export function WrapperContent () {
  useScrollSelected()
  useScrolledView()

  return (
    <>
      <article className='content' id='content'>
        <Projects id='projects' />
        <Experience id='experience' />
        <Studies id='studies' />
        <About id='about' />
      </article>
    </>
  )
}
