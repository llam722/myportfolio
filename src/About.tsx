import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="asus-setup">
        {/* <img alt='computer setup' src="./asus-setup.jpg" /> */}
        <img
          alt="computer setup"
          src="https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353067/Portfolio/asus-setup_b4dnvi.jpg"
        />
      </div>
      <h2>From Legos to Code: A Journey of Building and Problem-Solving</h2>
      <section className="about-me-container">
        <div className="about-me">
          <p>
            I've loved building things from a young age, from Legos to Rokenboks
            to Home Depot wood-working workshops on the weekends. However, being
            a gamer at heart, my actual first encounter with programming was in
            Diablo II. I taught myself how to configure a bot that used scripts
            based on an open-source language called AutoIt.
          </p>
          <p>
            As time went on, I realized that working on cars and custom PCs
            involved more than just hands-on mechanical skills - they also
            required coding skills to program and optimize various features.
            This led me to deepen my knowledge of coding and pursue further
            programming projects in my free time. This experience ignited a
            passion for programming within me, driving me to hone my skills and
            pursue a career as a software engineer.
          </p>
          <p>
            In my free time, I enjoy perusing new projects or technology and
            contributing to open-source projects. Today, I thrive on leveraging
            my extensive knowledge and problem-solving abilities to create
            innovative software solutions that push the boundaries of what's
            possible.
          </p>
          <br />
          <h4>Random Facts:</h4>
          <ul>
            <li>🎯 MBTI – ISTP (Virtuoso)</li>
            <li>🐕 Pet – Hunter (Pitbull)</li>
            <li>🍽 Food – Sushi, Hotpot, Italian</li>
            <li>📚 Books – Atomic Habits, The Redwall Collection</li>
          </ul>
          <br />
          <img alt="la jolla" src="./la-jolla.png" loading="lazy" />
          {/* <img alt='husky puppy' src="./husky-puppy.jpg" /> */}
        </div>
        <div className="about-me-pic">
          <img
            alt="acura nsx"
            src="https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353055/Portfolio/louis-nsx_vtxmqt.png"
            loading="lazy"
          />
          <img
            className="hunter"
            alt="pitbull"
            src="https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353061/Portfolio/hunter_ameqib.png"
            loading="lazy"
          />
          <img
            alt="silverlake sunset"
            src="https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353055/Portfolio/silverlake-sunset_rjdmi8.jpg"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
