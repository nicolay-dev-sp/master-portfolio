import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css'

export function Footer () {
  return (
    <>

      <footer className='footer-container'>
        <small className='copyright-section'>
          <p>
            Builded with <span className='react-font'>React <FontAwesomeIcon className='react-icon' icon={faReact} /></span> and powered by <span className='highlight-font'>nico-dev</span>
          </p>
          <p>
            © All rights reserved.
          </p>
        </small>

      </footer>
    </>
  )
}
