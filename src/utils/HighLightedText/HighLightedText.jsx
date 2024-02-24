export function HighLightedText ({ text, highlightedWords, italic, customClass }) {
  const splitText = text.split(' ')
  const textClass = customClass || 'introduction-content'

  return (
    <>
      <p className={textClass}>
        {
            splitText.reduce((acc, text, index) => {
              if (highlightedWords && highlightedWords.includes(text)) {
                acc.push(<span key={text + index} className='highlight-words'>{text}{' '}</span>)
              } else if (italic && italic.includes(text)) {
                acc.push(<span className='italic-words' key={text + index}>{text}{' '}</span>)
              } else {
                if (acc.length > 0 && typeof acc[acc.length - 1] === 'string') {
                  acc[acc.length - 1] += text + ' '
                } else {
                  acc.push(text + ' ')
                }
              }
              return acc
            }, [])
        }
      </p>
    </>
  )
}
