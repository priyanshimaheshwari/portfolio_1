import './App.css';
import React from 'react'
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Skills />
    <Portfolio />
   
    <Contact />
    <Footer />
    </>
  )
}

export default App