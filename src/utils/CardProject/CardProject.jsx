import { useContext } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { DeviceInfoContext } from '../../context/DeviceInfoContext'

export function CardProject ({ project }) {
  const { deviceInfo } = useContext(DeviceInfoContext)
  return (
    <Card className={deviceInfo.isMobile ? 'custom-card-mobile' : 'custom-card'}>
      <CardBody className={deviceInfo.isMobile ? 'card-body-mobile' : 'card-body p-0'}>
        {!deviceInfo.isMobile
          ? (
            <section className='timeline'>
              <p>
                {project.startDate}-{project.endDate}
              </p>
            </section>

            )
          : (
              ''
            )}
        <section className='content-card'>
          <h1 className='card-title'>
            {project.title} - {project.company}
          </h1>
          <h3 className='card-subtitle'>{project.role} {deviceInfo.isMobile ? `${project.startDate} - ${project.endDate}` : ''}</h3>
          <p className='card-content'>{project.description}</p>
          <section className={deviceInfo.isMobile ? 'tags-section-mobile' : 'tags-section'}>
            {project.tags.map((tag, index) => {
              return <span key={tag + index} className='tag'>{tag}</span>
            })}
          </section>
        </section>
      </CardBody>
    </Card>
  )
}
