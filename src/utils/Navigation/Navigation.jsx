import { MenuContext } from '../../context/MenuContext'
import { useContext } from 'react'
import './Navigation.css'
import { DeviceInfoContext } from '../../context/DeviceInfoContext'

export function Navigation () {
  const { currentMenu, setCurrentMenu } = useContext(MenuContext)
  const { deviceInfo } = useContext(DeviceInfoContext)

  const handleClick = (event) => {
    setCurrentMenu(event.target.dataset.section)
  }

  return (
    <>
      <ul className='navigation'>
        <li
          onClick={handleClick}
          data-section='projects'
          className={`menu-item ${
            currentMenu === 'projects' ? 'selected-menu-item' : ''
          }  ${deviceInfo.isMobile ? 'mobile-menu' : null} `}
        >
          Projects
        </li>
        <li
          onClick={handleClick}
          data-section='experience'
          className={`menu-item ${
            currentMenu === 'experience' ? 'selected-menu-item' : ''
          } ${deviceInfo.isMobile ? 'mobile-menu' : null} `}
        >
          Experience
        </li>
        <li
          onClick={handleClick}
          data-section='studies'
          className={`menu-item ${
            currentMenu === 'studies' ? 'selected-menu-item' : ''
          } ${deviceInfo.isMobile ? 'mobile-menu' : null}  `}
        >
          Studies
        </li>
        <li
          onClick={handleClick}
          data-section='about'
          className={`menu-item ${
            currentMenu === 'about' ? 'selected-menu-item' : ''
          } ${deviceInfo.isMobile ? 'mobile-menu' : null} `}
        >
          About
        </li>
      </ul>
    </>
  )
}
