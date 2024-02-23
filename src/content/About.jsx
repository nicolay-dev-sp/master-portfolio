import { HighLightedText } from '../utils/HighLightedText/HighLightedText'
import './Content.css'

export function About ({ id }) {
  const text = {
    introduction: {
      text: 'Professional Software Engineer, focused on scalable Web Applications with a solid and successful track record in powered technology solutions.',
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
      text: 'Code philosophy: Scalable - Maintainable - Efficient - Deliverable - SOLID - SAFe - Agile & Standardized.',
      highlights: ['Scalable', 'Maintainable', 'Efficient', 'Deliverable', 'SOLID', 'SAFe', 'Agile', 'Standardized.'],
      italic: ['Code', 'philosophy:']
    }
  }

  return (
    <>
      <main className='main-content-section' id={id}>
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
      </main>
    </>
  )
}
