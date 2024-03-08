import { About } from '../About'
import { Projects } from '../Projects'
import './WrapperContent.css'
import { Studies } from '../Studies'
import { useScrollSelected } from '../../hooks/useScrollSelected'
import { useScrolledView } from '../../hooks/useScrolledView'

export function WrapperContent () {
  useScrollSelected()
  useScrolledView()

  return (
    <>
      <article className='content' id='content'>
        <About id='about' />
        <Projects id='experience' />
        <Studies id='studies' />
      </article>
    </>
  )
}
