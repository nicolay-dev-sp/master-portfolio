import { useState, createContext, useContext } from 'react'
import { DeviceInfoContext } from './DeviceInfoContext'

export const MenuContext = createContext()

export function MenuProvider ({ children }) {
  const { deviceInfo } = useContext(DeviceInfoContext)
  const [currentMenu, setCurrentMenu] = useState(deviceInfo.isMobile ? '' : 'projects')
  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
