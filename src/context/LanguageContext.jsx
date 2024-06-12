import { createContext } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider ({ children }) {
  const language = 'es'
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  )
}
