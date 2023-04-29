import { Link } from 'react-router-dom'
import './Home.css';
import Nav from './Nav';
import Projects from './Projects';
import Footer from './Footer';


const Home = () => {
  return (
      <div className="Home">
        <section className='bio'>
        <h1>
        Software engineer 🧑‍💻, tinkerer 🛠 , and tech enthusiast 🖥️
        </h1>
        <p>
        I'm <strong>Louis Lam</strong>, a software engineer and entrepreneur with a drive to contribute to open-source projects, attend tech events, and empower the development community. Contributor of <a href="https://www.reacti.me/" target='_blank' rel='noreferrer'>Reactime</a>.
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
  )
}

export default Home;