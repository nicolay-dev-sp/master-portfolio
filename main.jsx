import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { MenuProvider } from './src/context/MenuContext'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </NextUIProvider>
  </React.StrictMode>
)
