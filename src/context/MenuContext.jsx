import { useState, createContext } from 'react'

export const MenuContext = createContext()

export function MenuProvider ({ children }) {
  const [currentMenu, setCurrentMenu] = useState('projects')
  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
