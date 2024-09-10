import { Card, CardBody } from '@nextui-org/react'

export function CardProject ({ project }) {
  return (
    <Card className='custom-card'>
      <CardBody className='card-body p-0'>
        <section className='timeline'>
          <p>
            {project.startDate}-{project.endDate}
          </p>
        </section>
        <section className='content-card'>
          <h1 className='card-title'>
            {project.title} - {project.company}
          </h1>
          <h3 className='card-subtitle'>{project.role}</h3>
          <p className='card-content'>{project.description}</p>
          <section className='tags-section'>
            {project.tags.map((tag, index) => {
              return <span key={tag + index} className='tag'>{tag}</span>
            })}
          </section>
        </section>
      </CardBody>
    </Card>
  )
}
