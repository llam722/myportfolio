import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/louis-lam7/' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden='true'></i>
              <span className='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href='https://github.com/llam722' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github"></i>
              <span className='sr-only'>Github</span>
            </a>
          </li>
          <li>
            <a href='mailto:louislam7229@gmail.com' target='_blank' rel="noreferrer">
              <i className="fa-solid fa-envelope"></i>
              <span className='sr-only'>Email</span>
            </a>
          </li>
        </ul>
        <p>
          <small>
            &copy; 2023 Louis Lam. All rights reserved.
          </small>
        </p>
    </footer>
  )
}

export default Footer;