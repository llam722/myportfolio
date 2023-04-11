import './Projects.css'


const Projects = () => {
  return (
    <div className='projects'>
      <section>
        <h2>Recent work</h2>
        <h4>Here are some open-source projects that I have worked on. I'm constantly seeking new ideas and opportunities to collaborate, so please don't hesitate to reach out and contribute or share your thoughts.</h4>

      <article className="work">

        <div className="text">
          <h3 className='reactime'><a href="https://www.reacti.me/" target='_blank' rel='noreferrer'>Reactime</a></h3>
          <h4>State Management and Debugging Tool for React</h4>
          <p className="textbox">
            Reactime is a Chrome extension and time-travel debugger for React that allows developers to record, track,
            and visualize
            state changes. Reactime leverages React’s core reconciliation algorithm, React Fiber, to allow developers to
            time-travel using a fabricated history stack
            to previous states of their applications.
          </p>
        </div>

        <img src="https://github.com/open-source-labs/reactime/raw/master/assets/new-reactime.gif"
          alt="Screenshot of Reactime." />

      </article>

      

      <article className='work'>

        <div className="text">
          <h3>Scrumify</h3>
          <h4>Digital Scrum Board to reinforce the principles of Agile methodology </h4>
          <p className="textbox">
            Now in Dark Mode! – Scrumify is a virtual Scrum board developed with React that provides access to sprints
            based on the consumer login. A customized board profile with an edit and delete functionality, consumers can
            keep track and manage their tasks as necessary. Management of state is divided into three columns,
            respective of their progress.
          </p>
        </div>

        <video autoPlay loop muted
          src="https://res.cloudinary.com/djnwvbzzr/video/upload/v1676322831/Scrumify/Scrumify_hqnxjx.mov"
           />

        </article>
        
        <article className="work">

        <div className="text">
          <h3>Sidekick</h3>
          <h4>Pairing up sport enthusiasts</h4>
          <p className="textbox">
            Looking for your Player 2? Tired of asking friends who aren't interested in the same sports? Sidekick
            matches you with your coterie, so you'll never have to play alone
            again. Think Tinder, but for sports!
          </p>
        </div>

        <video className='scrumify' autoPlay loop muted
          src="https://res.cloudinary.com/djnwvbzzr/video/upload/v1676326963/Scrumify/Sidekickdemo_vxsfwu.mov"
        />

      </article>
    </section>
    </div>
  )
}

export default Projects;