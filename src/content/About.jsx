import { Footer } from '../utils/Footer/Footer'
import { HighLightedText } from '../utils/HighLightedText/HighLightedText'
import './Content.css'

export function About ({ id }) {
  const text = {
    introduction: {
      text: 'Hey!, Nicolay here 👋🏻, I am a professional Software Engineer, focused on scalable Web Applications with a solid and successful track record in powered technology solutions.',
      highlights: ['Web', 'Applications']
    },
    performance: {
      text: 'Back in university, I found myself very interested in Design, Programming and Value. That\'s why I specialized and became proficient in the field of development.',
      highlights: ['Design,', 'Programming', 'Value.']
    },
    coreStack: {
      text: 'Core stack: React (TS/JS) - Flask (Python) - AWS & Teamwork.',
      highlights: ['React', 'Flask', 'AWS', 'Teamwork.'],
      italic: ['Core', 'stack:']
    },
    codePhilosophy: {
      text: 'Code philosophy: Scalable - Maintainable - Efficient - Deliverable - SOLID & Standardized.',
      highlights: ['Scalable', 'Maintainable', 'Efficient', 'Deliverable', 'SOLID', 'SAFe', 'Standardized.'],
      italic: ['Code', 'philosophy:']
    }
  }

  return (
    <>
      <section className='about-content-section' id={id}>
        <section className='about-text'>
          {Object.keys(text).map((elKey, index) => {
            return (
              <HighLightedText
                key={elKey + index}
                text={text[elKey].text}
                highlightedWords={text[elKey].highlights}
                italic={text[elKey].italic}
              />
            )
          })}
        </section>
        <Footer />
      </section>
    </>
  )
}
