import { useEffect, useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import { DeviceInfoContext } from '../context/DeviceInfoContext'

export function useScrollSelected () {
  const { currentMenu } = useContext(MenuContext)
  const { deviceInfo } = useContext(DeviceInfoContext)
  const scrollToSelectedSection = () => {
    if (currentMenu && !deviceInfo.isMobile) {
      const contentElement = document.getElementById('content')
      const sectionElement = contentElement?.querySelector(`#${currentMenu}`)
      if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(scrollToSelectedSection, [currentMenu])
}
