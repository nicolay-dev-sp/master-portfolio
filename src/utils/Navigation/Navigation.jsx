import { useState } from 'react'
import './Navigation.css'

export function Navigation ({ handleSelectedSection }) {
  const [navigation, setNavigation] = useState('about')

  const handleClick = (event) => {
    const targetSection = event.target.dataset.section
    setNavigation(targetSection)
    handleSelectedSection(targetSection)
  }

  return (
    <>
      <ul className='navigation'>
        <li
          onClick={handleClick}
          data-section='about'
          className={`menu-item ${
            navigation === 'about' ? 'selected-menu-item' : ''
          }`}
        >
          About
        </li>
        <li
          onClick={handleClick}
          data-section='experience'
          className={`menu-item ${
            navigation === 'experience' ? 'selected-menu-item' : ''
          }`}
        >
          Experience
        </li>
        <li
          onClick={handleClick}
          data-section='studies'
          className={`menu-item ${
            navigation === 'studies' ? 'selected-menu-item' : ''
          }`}
        >
          Studies
        </li>
      </ul>
    </>
  )
}
