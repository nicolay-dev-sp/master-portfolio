import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { MenuProvider } from './src/context/MenuContext'
import { LanguageProvider } from './src/context/LanguageContext'
import { DeviceInfoProvider } from './src/context/DeviceInfoContext'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <DeviceInfoProvider>
        <LanguageProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </LanguageProvider>
      </DeviceInfoProvider>
    </NextUIProvider>
  </React.StrictMode>
)
