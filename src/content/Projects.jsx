import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image
} from '@nextui-org/react'

export function Projects ({ id, selectedSection }) {
  return (
    <>
      <main id={id} className='main-content-section'>
        <Card className='custom-card'>
          <CardBody className='card-body'>
            <section className='timeline'>
              <p>2018 - present</p>
            </section>
            <section className='content-card'>
              <p className='card-title'>Project Chat bot - Bancolombia</p>
              <p className='card-subtitle'>Middle front-end engineer </p>
              <p className='card-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ex officiis magni vitae veritatis error perferendis impedit nostrum, blanditiis quos quibusdam itaque voluptate ab repudiandae vel voluptatibus exercitationem dolor distinctio.</p>
              <section className='tags-section'>
                <span className='tag'>JavaScript</span>
                <span className='tag'>Node</span>
                <span className='tag'>Docker</span>
                <span className='tag'>Angular</span>
                <span className='tag'>SQL</span>
              </section>
            </section>
            {/* <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
              <div className='relative col-span-6 md:col-span-4'>
                <Image
                  className=''
                  height={100}
                  src='src\assets\images\project-template.jpg'
                  width='100%'
                />
              </div>

              <div className='flex flex-col col-span-6 md:col-span-8'>
                <div className='flex justify-between items-start'>
                  <div className='flex flex-col gap-0'>
                    <h3>
                      Daily Mix
                    </h3>
                    <p>12 Tracks</p>
                    <h1 className='text-large font-medium mt-2'>
                      Frontend Radio
                    </h1>
                  </div>
                </div>

                <div className='flex flex-col mt-3 gap-1'>
                  <div className='flex justify-between'>
                    <p className='text-small'>1:23</p>
                  </div>
                </div>

              </div>
            </div> */}
          </CardBody>
        </Card>
      </main>
    </>
  )
}
