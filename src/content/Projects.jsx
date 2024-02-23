import { CardProject } from '../utils/CardProject/CardProject'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export function Projects ({ id }) {
  const projects = [
    {
      title: 'Identity Now',
      company: 'Sailpoint',
      location: 'US Based (Remote)',
      role: 'UI Developer',
      startDate: '2023',
      endDate: 'prest',
      description: 'Definition, planning, development of new features (Filters, Data visualization, API consumption among other scopes).',
      tags: ['Angular', 'Github', 'Figma', 'NestJS']
    },
    {
      title: 'Outcome planner',
      company: 'Kinesso',
      location: 'US Based (Remote)',
      role: 'Frontend Developer',
      startDate: '2021',
      endDate: '2022',
      description: 'Web application responsible of the visualization of different layers of data to plan marketing strategies.',
      tags: ['JavaScript', 'Jenkins', 'Gitlab', 'Jasmine', 'Karma']
    },
    {
      title: 'Factory talk',
      company: 'Rockwell Automation',
      location: 'Colombia',
      role: 'Full-stack Developer',
      startDate: '2020',
      endDate: '2021',
      description: 'Migration to a new embedded web application (New technologies, new architecture, new styles & functionalities).',
      tags: ['NodeJs', 'Angular', 'Kubernetes', 'SAFe']
    }
  ]

  return (
    <>
      <main id={id} className='main-content-experience-section'>
        {
          projects.map((project, index) => {
            return <CardProject key={project + index} project={project} />
          })
        }
        <section className='download-cv-section'>
          <Button className='download-cv' variant='bordered'>
            Check full CV here <FontAwesomeIcon icon={faDownload} />
          </Button>

        </section>
      </main>
    </>
  )
}
