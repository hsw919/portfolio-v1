import logo from '../assets/logo.png'
import Hamburger from './Hamburger'
import { useState } from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
      <div className={`logo ${isActive ? 'img-disable' : ''}`}>
        <a href='#intro'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <ul className='default-menu'>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      {isActive && (
        <div className='hamburger-menu'>
          <ul className='hamburger-ul'>
            <li>
              <a href='#about' onClick={() => setIsActive(false)}>
                About
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => setIsActive(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => setIsActive(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
