import { Card, CardBody, CardFooter } from '@nextui-org/react'
import { HighLightedText } from '../utils/HighLightedText/HighLightedText'

export function Projects ({ id }) {
  const textIntroduction = {
    text: 'After six years of experience collaborating with large companies and high-impact projects, I have decided to embark on my path as an independent professional. With a strong skill set developed, I now offer creative and effective solutions to my clients.',
    highlightWords: ['large', 'companies', 'high-impact', 'projects', 'independent', 'professional.', 'creative', 'effective', 'solutions']
  }

  const projects = [
    {
      title: 'Biztrade',
      architecture: 'Web-app based on a microservices architecture that manages business listings and sales in Latam. Each service is decoupled, handling specific functions, enabling independent maintenance and future integrations. ',
      description: 'Definition, planning, development of new features (Filters, Data visualization, API consumption among other scopes).',
      tags: ['React', 'Django', 'PostgreSQL', 'AWS', 'Microservices'],
      img: 'https://biztrade-images.s3.amazonaws.com/profile_previews/biztrade-sm.png'
    }
  ]

  return (
    <section id={id} className='main-content-projects-section'>
      <h1 className='default-title'># Freelance Journey</h1>
      <HighLightedText text={textIntroduction.text} highlightedWords={textIntroduction.highlightWords} />
      <HighLightedText text='Check my last project:' />
      {
        projects.map((project) => {
          return (
            <ul key={project} className='project-list'>
              <li className='project-item'>
                <a href='https://biztrade.netlify.app/' target='_blank' rel='noreferrer'>
                  <Card className='custom-card'>
                    <CardBody className='card-body'>
                      <section className='project-description'>
                        <h1 className='card-project-title'>{project.title}</h1>
                        <p>{project.architecture}</p>
                      </section>
                      <section className='image-section'>

                        <img
                          src={project.img}
                          alt={'preview of project ' + project.name}
                          className='object-cover rounded-xl project-preview'
                        />
                      </section>
                    </CardBody>
                    <CardFooter className='project-tags'>
                      {project.tags.map((tag, index) => {
                        return <span key={tag + index} className='tag'>{tag}</span>
                      })}
                    </CardFooter>
                  </Card>
                </a>
              </li>
            </ul>

          )
        })
      }

    </section>
  )
}
