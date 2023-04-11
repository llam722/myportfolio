import {Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About'
import Home from './Home'
import Contact from './Contact'


function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
