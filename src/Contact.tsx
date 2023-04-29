import './Contact.css'
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  return (
      <div className="Contact">
        <div className="header">
            <h1>Collaborate to Innovate – </h1>
        </div>
        <section className="connect-container">
          <div className="connect">
            <p>
              I'm passionate about working with like-minded creatives and entrepreneurs to bring new ideas to life. Whether you have a project in mind or just want to connect and share your passions, I'm always eager to collaborate and learn something new. Let's take it to the next level!
              </p>
          </div>
          <div className="connect-pic">
            <img alt='cat laptop' src="./cat-laptop.jpg" />
          </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Contact;