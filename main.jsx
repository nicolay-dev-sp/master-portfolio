import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
