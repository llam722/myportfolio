import './Projects.css'


const Projects = () => {
  return (
    <div className='projects'>
      <section>
      <h2>Works</h2>

      <article className="reactime">

        <div className="text">
          <h3>Reactime</h3>
          <h4>State Management and Debugging Tool for React</h4>
          <p className="textbox">
            Reactime is a Chrome extension and time-travel debugger for React that allows developers to record, track,
            and visualize
            state changes. Reactime leverages React’s core reconciliation algorithm, React Fiber, to allow developers to
            time-travel using a fabricated history stack
            to previous states of their applications.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>(Visx – D3.js)</li>
            <li>Jest</li>
            <li>Travis CI</li>
            <li>Webpack</li>
          </ul>
        </div>

        <img src="https://github.com/open-source-labs/reactime/raw/master/assets/new-reactime.gif"
          alt="Screenshot of Reactime." />

      </article>

      {/* <article>

        <div className="text">
          <h3>Reactime</h3>
          <h4>State Management and Debugging Tool for React</h4>
          <p className="blackbox">
            Reactime is a Chrome extension and time-travel debugger for React that allows developers to record, track,
            and visualize
            state changes. Reactime leverages React’s core reconciliation algorithm, React Fiber, to allow developers to
            time-travel using a fabricated history stack
            to previous states of their applications.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>(Visx – D3.js)</li>
            <li>Jest</li>
            <li>Travis CI</li>
          </ul>
        </div>

        <img
          src="https://github.com/open-source-labs/reactime/raw/master/assets/new-reactime.gif"
          alt="Screenshot of Reactime." />

      </article>

      <article className="reverse">

        <div className="text">
          <h3>Scrumify v2</h3>
          <h4>Digital Scrum Board to reinforce the principles of Agile methodology </h4>
          <p className="blackbox">
            Now in Dark Mode! – Scrumify is a virtual Scrum board developed with React that provides access to sprints
            based on the consumer login. A customized board profile with an edit and delete functionality, consumers can
            keep track and manage their tasks as necessary. Management of state is divided into three columns,
            respective of their progress.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SASS</li>
            <li>Jest</li>
            <li>Webpack</li>
          </ul>
        </div>

        <video autoPlay loop muted
          src="https://res.cloudinary.com/djnwvbzzr/video/upload/v1676322831/Scrumify/Scrumify_hqnxjx.mov"
           />

      </article> */}
    </section>
    </div>
  )
}

export default Projects;