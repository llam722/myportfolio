import './About.css'

const About = () => {
  return (

    <div className="About">
        <div className="asus-setup">
          <img alt='computer setup' src="./asus-setup.jpg" />
        </div>
          <h2>From Legos to Code: A Journey of Building and Problem-Solving</h2>
      <section className="about-me-container">
        <div className="about-me">
          <p>
            I've loved building things from a young age, from Legos to Rokenboks to Home Depot wood-working workshops on the weekends. However, being a gamer at heart, my actual first encounter with programming was in Diablo II. I taught myself how to configure a bot that used scripts based on an open-source language called AutoIt.
          </p>
          <p>
            As I grew older, I realized that working on cars and custom PCs involved more than just hands-on mechanical skills - they also required coding skills to program (ECU tuning) and optimize various features. This led me to deepen my knowledge of coding and pursue further programming projects in my free time. Today, as a software engineer, I leverage my passion for building and problem-solving to create innovative software solutions that push the boundaries of what's possible. This pivotal experience ignited a passion for programming within me, driving me to hone my skills and pursue a career as a software engineer. Today, I thrive on leveraging my extensive knowledge and problem-solving abilities to create innovative software solutions that push the boundaries of what's possible.
          </p>
            <p>
            I pride myself on my attention to detail and ability to find creative solutions to complex problems. In my free time, I enjoy perusing new projects or technology and contributing to open-source projects. I'm excited to continue building innovative software solutions and pushing the boundaries of what's possible.
          </p>
          <br/>
            <h4>Random Facts:</h4>
          <ul>
            <li>
            MBTI – ISTP (Virtuoso)
            </li>
            <li>
              Pet – Hunter (Pitbull)
            </li>
            <li>
              Food – Sushi, Hotpot, Italian
            </li>
            <li>
              Books – Atomic Habits
            </li>
          </ul>
          <img alt='la jolla' src="./la-jolla.png" />
          <img alt='husky puppy' src="./husky-puppy.jpg" />
        </div>
        <div className="about-me-pic">
          <img alt='acura nsx' src="./louis-nsx.png"/>
          <img alt='silverlake sunset' src="./silverlake-sunset.jpg" />
          <img className="hunter" alt='pitbull' src="./hunter.png" />
        </div>
        

      
      </section>
      </div>
  )
}

export default About;