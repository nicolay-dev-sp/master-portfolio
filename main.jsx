import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { MenuProvider } from './src/context/MenuContext'
import { LanguageProvider } from './src/context/LanguageContext'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <LanguageProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </LanguageProvider>
    </NextUIProvider>
  </React.StrictMode>
)
