import './Contact.css'

const Contact = () => {
  return (
      <div className="Contact">
            <h1>Get in Touch</h1>
        <section className="connect-container">
          {/* <div className="connect-pic">
            <img alt='cat laptop' src="./cat-laptop.jpg" />
          </div> */}
          <div className="connect">
            <p>
            LinkedIn: <a href="https://www.linkedin.com/in/louis-lam7/" target="_blank" rel="noreferrer">Louis Lam</a>
            <br/>
            Email: <a href="mailto:louislam7229@gmail.com"> louislam7229@gmail.com </a>
            <br />
              </p>
          </div>
        </section>
      </div>
  )
}

export default Contact;