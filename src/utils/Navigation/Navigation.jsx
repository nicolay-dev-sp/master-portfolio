import './Navigation.css'

export function Navigation ({ selectedSection, handleSelectedSection }) {
  const handleClick = (event) => {
    const targetSection = event.target.dataset.section
    handleSelectedSection(targetSection)
  }

  return (
    <>
      <ul className='navigation'>
        <li
          onClick={handleClick}
          data-section='about'
          className={`menu-item ${
            selectedSection === 'about' ? 'selected-menu-item' : ''
          }`}
        >
          About
        </li>
        <li
          onClick={handleClick}
          data-section='experience'
          className={`menu-item ${
            selectedSection === 'experience' ? 'selected-menu-item' : ''
          }`}
        >
          Experience
        </li>
        <li
          onClick={handleClick}
          data-section='studies'
          className={`menu-item ${
            selectedSection === 'studies' ? 'selected-menu-item' : ''
          }`}
        >
          Studies
        </li>
      </ul>
    </>
  )
}
