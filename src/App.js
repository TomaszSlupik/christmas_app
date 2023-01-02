import * as React from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Presents from './components/Presents/Presents';
import './App.scss'
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <div>
      <Router>
      <Nav />
      <Routes>
        <Route path='/christmas_app' element={<Main />} />
        <Route path='/christmas_app/presents' element={<Presents />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
