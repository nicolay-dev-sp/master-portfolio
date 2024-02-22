import { MainIntroduction } from './MainIntro'
import avatar from './../../assets/images/AvatarIsolate.png'
import webIcon from './../../assets/images/WebIcon.png'
import './ResumeCard.css'

export function ResumeCard (params) {
  return (
    <>
      <article className='title-section'>
        <section className='title-header'>
          <img
            src={avatar}
            alt='avatar'
            className='avatar'
          />
          <img
            src={webIcon}
            alt='avatar'
            className='web-avatar'
          />

        </section>
        <h2 className='title-name'># Nicolay J. González</h2>
        <MainIntroduction />
      </article>

    </>
  )
}
