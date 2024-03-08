import { useState, createContext } from 'react'

export const MenuContext = createContext()

export function MenuProvider ({ children }) {
  const [currentMenu, setCurrentMenu] = useState('about')
  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
