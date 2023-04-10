// import { Route, Router as BrowserRouter } from "react-router";
import './Nav.css'

const Nav = () => {
  return (
    <nav className='Nav'>
    <ul className="Nav-bar">
      <li><a href='about.html'>About</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
  </nav>
  )
}

export default Nav;