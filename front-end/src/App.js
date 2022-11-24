import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React from 'react';
import './index.css'; 
import { useState } from 'react';

import Nav from './components/NavBar/Nav';
import {Route,Routes} from 'react-router-dom'; 
function App() {


  const [loggedIn, setLogIn] = useState(localStorage.getItem("user")!==null);



  return (
    <>
    <Nav loggedIn = {loggedIn} setLogIn = {setLogIn}/>
    <Routes>
      <Route exact path="/" element={<Home loggedIn = {loggedIn} setLogIn = {setLogIn}/>}/>
      <Route exact path="/about" element={<About/>}/>

    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
