import { Link } from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'
import './About.css'

const About = () => {
  return (
    <div className="About">
      <Nav/>
      <div className="profile-pic-container">
          <Link to='/' className='profile-pic'>
          <img alt='profile' src='./profilepic.png' />
          </Link>
      </div>
      <section className="about-me-container">
        <div className="about-me">
          <h2>In pursuit of innovation</h2>
          <p>
            I've loved building things since I was a young kid, from Legos to Rokenboks to Home Depot wood-working workshops on the weekends. However, being a gamer at heart, my actual first encounter with programming was in Diablo II. I taught myself how to set up a bot that used scripts based on an open-source language called AutoIt.
            </p>
<p>
            I pride myself on my attention to detail and ability to find creative solutions to complex problems. In my free time, I enjoy perusing new projects or technology and contributing to open-source projects. I'm excited to continue building innovative software solutions and pushing the boundaries of what's possible.
        </p>
        </div>
        <div className="about-me-pic">
          <img alt='silverlake sunset' src="./silverlake-sunset.jpg" />
        </div>
        

      
      </section>
      <Footer/>
    </div>
  )
}

export default About;