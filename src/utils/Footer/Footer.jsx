import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css'

export function Footer () {
  return (
    <>

      <footer className='footer-container'>
        <section className='copyright-section'>
          <p>
            Builded with <span className='react-font'>React <FontAwesomeIcon className='react-icon' icon={faReact} /></span> and powered by <span className='highlight-font'>nico-dev</span> 2024.  © All rights
            reserved.
          </p>
        </section>

      </footer>
    </>
  )
}
