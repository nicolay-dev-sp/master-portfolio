import { useContext } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { DeviceInfoContext } from '../context/DeviceInfoContext'
export function Studies ({ id }) {
  const { deviceInfo } = useContext(DeviceInfoContext)
  const courses = [
    {
      title: 'MS in Software Engineering',
      institute: 'Universidad de los Andes',
      grade: '2024',
      type: 'Master of Science degree',
      icon: '',
      highlight: ['Software', 'Master']
    },
    {
      title: 'B.S. in Systems & Computing Engineering',
      institute: 'Universidad Pedagógica y Tecnológica de Colombia',
      grade: '2019',
      type: 'Bachelor of Science degree',
      icon: '',
      highlight: ['Systems', 'Computing', 'Bachelor']
    },
    {
      title: 'AWS Cloud Practitioner',
      institute: 'AWS',
      grade: '2024',
      type: 'Certificate',
      icon: '',
      link: 'https://1drv.ms/b/s!AieWYZyae4cEhslf6Vszc9CP7sq0MA?e=eX0ODB',
      highlight: ['AWS']
    },
    {
      title: 'English level C1',
      institute: 'EF SET',
      grade: '2023',
      type: 'Certificate',
      icon: '',
      link: 'https://cert.efset.org/rwgaXK',
      highlight: ['English']
    },
    {
      title: 'Certified SAFe® 5 Practitioner',
      institute: 'Scaled Agile Inc',
      grade: '2022',
      type: 'Certificate',
      icon: '',
      link: 'https://www.credly.com/badges/73bfbf88-c0eb-4d47-a2f2-472af0df9d3c?source=linked_in_profile',
      highlight: ['SAFe®']
    }
  ]

  return (
    <>
      <section id={id} className={deviceInfo.isMobile ? 'main-content-studies-section-mobile' : 'main-content-studies-section'}>
        <Table
          aria-label='Studies & Certifications' classNames={{
            base: `${deviceInfo.isMobile ? 'custom-wrapper-table-mobile' : 'custom-wrapper-table'}`, // table wrapper
            table: 'custom-table',
            thead: '',
            tbody: '',
            th: 'custom-th',
            emptyWrapper: 'custom-empty-wrapper-table'
          }}
        >
          <TableHeader className='custom-table'>
            <TableColumn>TITLE</TableColumn>
            <TableColumn>INSTITUTION </TableColumn>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>GRADE</TableColumn>
          </TableHeader>
          <TableBody>
            {
            courses.map((item, index) => {
              return (
                <TableRow key={item + index}>
                  {
                    item.link ? <TableCell><a className='title-link' href={item.link} target='_blank' rel='noreferrer'>{item.title} <FontAwesomeIcon className='link-icon' icon={faArrowUpRightFromSquare} /></a></TableCell> : <TableCell>{item.title}</TableCell>
                  }
                  <TableCell className='aligned-text'>{item.institute}</TableCell>
                  <TableCell className='aligned-text'>{item.type}</TableCell>
                  <TableCell>{item.grade}</TableCell>
                </TableRow>
              )
            })
            }
          </TableBody>
        </Table>
      </section>
    </>
  )
}
