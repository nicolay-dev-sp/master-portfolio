import './App.css'
import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import { useMouseBackground } from './hooks/useMouseBackground'
import { DeviceInfoContext } from './context/DeviceInfoContext'
import { useContext } from 'react'
import { MenuContext } from './context/MenuContext'
import { BackButton } from './utils/BackButton/BackButton'

export function App () {
  const { deviceInfo } = useContext(DeviceInfoContext)
  const { currentMenu } = useContext(MenuContext)
  useMouseBackground()

  return (
    <section className={deviceInfo.isMobile ? '' : 'main-container'}>
      {deviceInfo.isMobile && !!currentMenu ? <BackButton /> : ''}
      <header className={`${currentMenu && deviceInfo.isMobile ? 'fade-in' : ''} ${!currentMenu && deviceInfo.isMobile ? 'visible' : ''} ${currentMenu && deviceInfo.isMobile ? '' : 'flex'} basic-info-header`}>
        <ResumeCard />
        <Navigation />
        <SocialLinks />
      </header>
      <main className={`${deviceInfo.isMobile ? 'fade-in' : 'content-section'} ${!currentMenu ? '' : 'visible'}`}>
        <WrapperContent />
      </main>
    </section>
  )
}
