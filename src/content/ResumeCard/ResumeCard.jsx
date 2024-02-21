import './ResumeCard.css'
import { MainIntroduction } from './MainIntro'

export function ResumeCard (params) {
  return (
    <>
      <article className='title-section'>
        <section className='title-header'>
          <img
            src='src\assets\images\avatarIsolate.png'
            alt='avatar'
            className='avatar'
          />
          <img
            src='src/assets/images/WebIcon.png'
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
