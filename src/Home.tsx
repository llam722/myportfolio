import './Home.css';
import Projects from './Projects';


const Home = () => {
  return (
      <div className="Home">
        <section className='bio'>
        <h1>
        Software engineer 🧑‍💻, tinkerer 🛠 , and tech enthusiast 🖥️
        </h1>
        <p>
        I'm <strong>Louis Lam</strong>, a software engineer and entrepreneur with a drive to contribute to open-source projects, attend tech events, and empower the development community. Currently @ <a href="https://indema.co/" target='_blank' rel='noreferrer'>Indema</a>.
        </p>
      </section>
        <div className="picture-div-container">
      <div className='picture-div'>
        {/* <img alt='notion event' src='./Notion-event.jpg'></img>
        <img alt='laptop coffee' src='./laptop-coffee.jpg'></img>
        <img alt='watercooled pc' src='./watercooling.jpg'></img>
        <img alt='notion sticker' src='./notion-sticker.jpg'></img> */}
        <img alt='notion event' src='https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353065/Portfolio/Notion-event_e6rspx.jpg'></img>
        <img alt='laptop coffee' src='https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353074/Portfolio/laptop-coffee_zvejik.jpg'></img>
        <img alt='watercooled pc' src='https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353069/Portfolio/watercooling_jvq0jm.jpg'></img>
        <img alt='notion sticker' src='https://res.cloudinary.com/djnwvbzzr/image/upload/v1686353073/Portfolio/notion-sticker_g4s9g8.jpg'></img>
          





        </div>
        </div>
        <Projects/>
      </div>
  )
}

export default Home;