import { useEffect, useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

export function useScrollSelected () {
  const { currentMenu } = useContext(MenuContext)
  const scrollToSelectedSection = () => {
    if (currentMenu) {
      const contentElement = document.getElementById('content')
      const sectionElement = contentElement.querySelector(`#${currentMenu}`)
      if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(scrollToSelectedSection, [currentMenu])
}
