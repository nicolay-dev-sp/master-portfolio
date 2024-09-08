import { MenuContext } from '../../context/MenuContext'
import { useContext } from 'react'
import './Navigation.css'

export function Navigation () {
  const { currentMenu, setCurrentMenu } = useContext(MenuContext)

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
          }`}
        >
          Projects
        </li>
        <li
          onClick={handleClick}
          data-section='experience'
          className={`menu-item ${
            currentMenu === 'experience' ? 'selected-menu-item' : ''
          }`}
        >
          Experience
        </li>
        <li
          onClick={handleClick}
          data-section='studies'
          className={`menu-item ${
            currentMenu === 'studies' ? 'selected-menu-item' : ''
          }`}
        >
          Studies
        </li>
        <li
          onClick={handleClick}
          data-section='about'
          className={`menu-item ${
            currentMenu === 'about' ? 'selected-menu-item' : ''
          }`}
        >
          About
        </li>
      </ul>
    </>
  )
}
