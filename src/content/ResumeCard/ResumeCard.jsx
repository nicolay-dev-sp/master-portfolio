import './ResumeCard.css'
import avatar from './../../assets/images/AvatarIsolate.png'
import webIcon from './../../assets/images/WebIcon.png'
// import avatar from './../../assets/images/avatarIsolate.png'
// import avatar from 'src/assets/images/avatarIsolate.png'
import { MainIntroduction } from './MainIntro'

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
