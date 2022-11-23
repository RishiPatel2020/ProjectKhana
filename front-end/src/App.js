import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React from 'react';

import Nav from './components/NavBar/Nav';
import {Route,Routes} from 'react-router-dom'; 
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>

    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
