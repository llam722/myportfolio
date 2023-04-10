import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className='profile-pic'>
          <a href='home'>
          <img alt='profile' src='./profilepic.png' />
          </a>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>
          Software Engineer, tinkerer, and PC enthusiast.
        </h2>
        <p>
          I'm Louis, a software engineer and entrepreneur based in New York City. I have a passion for contributing to open source products and improving the developer community.
        </p>
      </header>
    </div>
  );
}

export default App;
