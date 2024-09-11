import './BackButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { MenuContext } from '../../context/MenuContext'
import { useContext } from 'react'

export function BackButton () {
  const { setCurrentMenu } = useContext(MenuContext)

  const handleBack = () => {
    setCurrentMenu('')
  }

  return (
    <span className='back-button' onClick={handleBack}>
      <FontAwesomeIcon icon={faCircleChevronLeft} />
    </span>
  )
}
