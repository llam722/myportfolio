import { Link } from 'react-router-dom'
import './Home.css';
import Nav from './Nav';
import Projects from './Projects';
import Footer from './Footer';


const Home = () => {
  return (
     <>
      <div className="Home">
        <Nav />
        <div className="profile-pic-container">
          <Link to='/' className='profile-pic'>
          <img alt='profile' src='./profilepic.png' />
          </Link>
        </div>
        
        <section className='bio'>
        <h2>
        Software engineer 🧑‍💻, tinkerer 🛠 , and tech enthusiast 🖥️
        </h2>
        <p>
        I'm Louis, a software engineer and entrepreneur with a drive to contribute to open-source projects, attend tech events, and empower the development community. Contributor of <a href="https://www.reacti.me/" target='_blank' rel='noreferrer'>Reactime</a>.
        </p>
      </section>
        <div className="picture-div-container">
      <div className='picture-div'>
        <img alt='notion event' src='./Notion-event.jpg'></img>
        <img alt='laptop coffee' src='./laptop-coffee.jpg'></img>
        <img alt='watercooled pc' src='./watercooling.jpg'></img>
        <img alt='notion sticker' src='./notion-sticker.jpg'></img>
        </div>
        </div>
        <Projects/>
      <Footer/>
      </div>
      </>
  )
}

export default Home;