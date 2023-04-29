import {Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Nav/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
