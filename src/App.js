import * as React from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Presents from './components/Presents/Presents';
import Contacts from './components/Contacts/Contacts';
import './App.scss'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/presents' element={<Presents />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
