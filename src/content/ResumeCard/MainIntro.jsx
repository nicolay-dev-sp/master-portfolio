import './MainIntro.css'
import { DeviceInfoContext } from '../../context/DeviceInfoContext'
import { useContext } from 'react'

export function MainIntroduction () {
  const { deviceInfo } = useContext(DeviceInfoContext)
  return (
    <>
      <section className={deviceInfo.isMobile ? 'introduction-section-mobile' : 'introduction-section'}>
        <h2 className='introduction-text'><span className='import-text'>Software Engineer</span> at <span className='library-import-text'> '@Life'</span></h2>
        <p className='introduction-text'>
          Blending bytes and dreams since 2018 <span className='victory-animation'>✌🏻</span>
        </p>
      </section>
    </>
  )
}
