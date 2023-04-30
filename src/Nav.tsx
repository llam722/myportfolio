import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav>
      
      <ul className="Nav-bar">
        <li>
          <Link to='/' className='profile-pic'>
          <img alt='profile' src='./profilepic.png' />
          </Link>
        </li>
        <li><Link to='/about'>
        About
        </Link></li>
        <li><Link to='/contact'>
        Contact
        </Link></li>
         <li><a href='https://www.linkedin.com/in/louis-lam7/' target='_blank' rel="noreferrer">
          <i className="fa-brands fa-linkedin" aria-hidden='true'></i>
          <span className='sr-only'>LinkedIn</span></a></li>
      <li><a href='https://github.com/llam722' target='_blank' rel="noreferrer">
          <i className="fa-brands fa-github"></i>
          <span className='sr-only'>Github</span></a></li>
      <li><a href='./Louis_Lam_Resume.pdf' download="" className='button'>Resume</a></li>
    
    </ul>
      </nav>
  )
}

export default Nav;