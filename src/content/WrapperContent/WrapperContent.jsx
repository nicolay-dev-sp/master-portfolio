import './WrapperContent.css'
import { About } from '../About'
import { Experience } from '../Experience'
import { Studies } from '../Studies'
import { useScrollSelected } from '../../hooks/useScrollSelected'
import { useScrolledView } from '../../hooks/useScrolledView'
import { Projects } from '../Projects'
import { MenuContext } from '../../context/MenuContext'
import { useContext } from 'react'
import { DeviceInfoContext } from '../../context/DeviceInfoContext'

export function WrapperContent () {
  const { currentMenu } = useContext(MenuContext)
  const { deviceInfo } = useContext(DeviceInfoContext)

  useScrollSelected()
  useScrolledView()

  const getView = (menu) => {
    switch (menu) {
      case 'projects':
        return (
          <Projects />
        )
      case 'experience':
        return (
          <Experience />
        )

      case 'studies':
        return (
          <Studies />
        )

      case 'about':
        return (
          <About />
        )

      default:
        break
    }
  }

  return (
    <>

      {deviceInfo.isMobile
        ? <h1 className='default-title-mobile'>{currentMenu}</h1>
        : ''}
      {
      !deviceInfo.isMobile
        ? (
          <section className='content' id='content'>
            <Projects id='projects' />
            <Experience id='experience' />
            <Studies id='studies' />
            <About id='about' />
          </section>
          )
        : (
          <section className='mobile-content'>
            {
              getView(currentMenu)
            }
          </section>
          )
    }
    </>

  )
}
