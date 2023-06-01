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
            state changes. Reactime leverages React’s core reconciliation algorithm - React Fiber, to allow developers to
            time-travel using a fabricated history stack
            consisting of previous states of their applications.
          </p>
        </div>

        <img src="https://github.com/open-source-labs/reactime/raw/master/assets/new-reactime.gif"
          alt="Screenshot of Reactime." onContextMenu={(e) => e.preventDefault()} />

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

        <video autoPlay loop muted onContextMenu={(e) => e.preventDefault()}
          src="https://res.cloudinary.com/djnwvbzzr/video/upload/v1676322831/Scrumify/Scrumify_hqnxjx.mov"
           />

        </article>
        
        <article className="work">

        <div className="text">
          <h3>Sidekick</h3>
          <h4>Pairing up sport enthusiasts</h4>
          <p className="textbox">
            Sidekick is the ultimate solution for finding your perfect sports partner. Similar to Tinder, but specifically designed for sports enthusiasts, Sidekick connects you with like-minded individuals who share your passion for the same activities. No more searching for a Player 2 or struggling to find teammates; with Sidekick, you'll never have to play alone again.
          </p>
        </div>

        {/* <video className='scrumify' autoPlay loop muted onContextMenu={(e) => e.preventDefault()}
          src="https://res.cloudinary.com/djnwvbzzr/video/upload/v1676326963/Scrumify/Sidekickdemo_vxsfwu.mov"
        /> */}

      </article>
        <article className="work">

        <div className="text">
          <h3>Taskful</h3>
          <h4>Task organizer</h4>
          <p className="textbox">
            Taskful is an innovative task organizer designed to streamline household chores and make them more engaging. Users can select tasks from a central board, each with its own point value and categorized priority, which are then added to their personal profiles. Taskful's intuitive login and task-selection process ensure a seamless, enjoyable experience as users tackle their daily household duties.
          </p>
        </div>

      </article>
    </section>
    </div>
  )
}

export default Projects;