import Help from './components/Help/Help';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React from 'react';
import './index.css'; 
import { useState } from 'react';
import './App.css'; 

import Nav from './components/NavBar/Nav';
import {Route,Routes} from 'react-router-dom'; 
import OrderPage from './components/OrderPage/OrderPage';
function App() {


  const [loggedIn, setLogIn] = useState(localStorage.getItem("user")!==null);

  const [meals, setMeals] = useState("");


  return (
    <>
    <Nav loggedIn = {loggedIn} setLogIn = {setLogIn}/>
    <Routes>
      <Route exact path="/" element={<Home loggedIn = {loggedIn} setLogIn = {setLogIn} setMeals ={setMeals} />}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/help" element={<Help/>}/>
      <Route exact path="/order" element={<OrderPage meals = {meals}/>}/>
    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
