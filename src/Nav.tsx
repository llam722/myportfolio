// import { Route, Router as BrowserRouter } from "react-router";
import './Nav.css'

const Nav = () => {
  return (
    <nav className='Nav'>
    <ul className="Nav-bar">
      <li><a href='about.html'>About</a></li>
      {/* <li><a href='#projects'>Projects</a></li> */}
        <li><a href='#contact'>Contact</a></li>
         <li><a href='https://www.linkedin.com/in/louis-lam7/' target='_blank' rel="noreferrer">
          <i className="fa-brands fa-linkedin" aria-hidden='true'></i>
          <span className='sr-only'>LinkedIn</span></a></li>
      <li><a href='https://github.com/llam722' target='_blank' rel="noreferrer">
          <i className="fa-brands fa-github"></i>
          <span className='sr-only'>Github</span></a></li>
      <li><a href='./Louis-Lam_Resume.pdf' download="" className='button'>Resume</a></li>
    </ul>
  </nav>
  )
}

export default Nav;