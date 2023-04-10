import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer'
import Projects from './Projects'

function App() {
  return (
    <>
    <div className="App">
        <Nav />
        <div className="profile-pic-container">
          <a className='profile-pic' href='home'>
          <img alt='profile' src='./profilepic.png' />
          </a>
      </div>
        <section className='bio'>
        <h2>
        Software engineer, tinkerer, and PC enthusiast.
        </h2>
        <p>
        I'm Louis, a software engineer and entrepreneur based in New York City, with a drive to contribute to open-source projects, attend tech events, and empower the development community. Currently, I'm contributing to <a href="https://github.com/open-source-labs/reactime" target='_blank' rel='noreferrer'>Reactime</a> and developing a Notion integration.
        </p>
      </section>
      
      <div className='picture-div'>
        <img alt='notion event' src='./Notion-event.jpg'></img>
        <img alt='laptop coffee' src='./laptop-coffee.jpg'></img>
        <img alt='watercooled pc' src='./watercooling.jpg'></img>
        <img alt='notion stickers' src='./Notion-stickers.jpg'></img>
        </div>
        <Projects/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
