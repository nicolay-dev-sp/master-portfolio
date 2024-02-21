import './Content.css'

export function About ({ id, selectedSection }) {
  return (
    <>
      <section className='main-content-section' id={id}>
        <p className='introduction-content'>
          My main area is web application
          development, and I possess strong knowledge of Angular, JavaScript,
          Unit Testing (Jest, Karma, Jasmine), Kubernetes, and Cypress.
          Additionally, I have a good understanding of Scrum and SAFe
          methodologies.
        </p>
        <p className='introduction-content'>
          During my career, I have also familiarized myself with
          the CI/CD process, Git, TDD, good programming practices, and clean
          code. The projects I have worked on are characterized by prioritizing
          some non-functional requirements such as Security, Scalability, and
          Performance.
        </p>
        <p className='introduction-content'>
          I am passionate about software and building applications.
          In my free time, I am creating a personal entrepreneurship. I consider
          myself an open and transparent person, interested in becoming a
          responsible leader with excellent assertive communication skills.
        </p>
      </section>
    </>
  )
}
