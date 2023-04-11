import './Contact.css'
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="Contact">
      <Nav/>
      <div className="profile-pic-container">
          <Link to='/' className='profile-pic'>
          <img alt='profile' src='./profilepic.png' />
          </Link>
      </div>
        <div className="asus-setup">
          <img alt='computer setup' src="./asus-setup.jpg" />
        </div>
          <h2>From Legos to Code: A Journey of Building and Problem-Solving</h2>
      <section className="about-me-container">
        <div className="about-me">
          <p>
            I've loved building things since I was a young kid, from Legos to Rokenboks to Home Depot wood-working workshops on the weekends. However, being a gamer at heart, my actual first encounter with programming was in Diablo II. I taught myself how to set up a bot that used scripts based on an open-source language called AutoIt.
          </p>
          <p>
            As I grew older, I realized that working on cars and custom PCs involved more than just hands-on mechanical skills - they also required coding skills to program (ECU tuning) and optimize various features. This led me to deepen my knowledge of coding and pursue further programming projects in my free time. Today, as a software engineer, I leverage my passion for building and problem-solving to create innovative software solutions that push the boundaries of what's possible. This pivotal experience ignited a passion for programming within me, driving me to hone my skills and pursue a career as a software engineer. Today, I thrive on leveraging my extensive knowledge and problem-solving abilities to create innovative software solutions that push the boundaries of what's possible.
          </p>
            <p>
            I pride myself on my attention to detail and ability to find creative solutions to complex problems. In my free time, I enjoy perusing new projects or technology and contributing to open-source projects. I'm excited to continue building innovative software solutions and pushing the boundaries of what's possible.
          </p>
          
        </div>
        <div className="about-me-pic">
          <img alt='silverlake sunset' src="./silverlake-sunset.jpg" />
          <img alt='changing exhaust' src="./car-exhaust.jpg"/>
        </div>
        

      
      </section>
      <Footer/>
    </div>
  )
}

export default Contact;