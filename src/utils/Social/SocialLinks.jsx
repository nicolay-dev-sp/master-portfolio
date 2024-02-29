import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import './SocialLinks.css'

const socialLinks = [
  { link: 'https://www.linkedin.com/in/nicolayjg/', icon: faLinkedin },
  { link: 'https://github.com/nicolay-dev', icon: faGithub },
  { link: 'https://www.instagram.com/_.nico.fpv/', icon: faInstagram },
  { link: 'https://www.facebook.com/profile.php?id=100068564977272', icon: faFacebook },
  { link: 'https://www.facebook.com/profile.php?id=100068564977272', icon: faEnvelope }
]

export function SocialLinks () {
  useEffect(() => {
    const socialIcons = document.getElementById('links-section').children
    Array.from(socialIcons).map((icon) => {
      return icon.classList.add('easeInOpacity')
    })
  }, [])

  return (
    <>
      <footer className='links-section' id='links-section'>
        {
          socialLinks.map((element, index) => {
            return (
              <a
                key={index}
                className='socialIcons'
                href={element.link}
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={element.icon} size='3x' />
              </a>
            )
          })
        }
      </footer>
    </>
  )
}
