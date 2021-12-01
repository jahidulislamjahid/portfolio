import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Works from './components/Works'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Works></Works>
      <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
