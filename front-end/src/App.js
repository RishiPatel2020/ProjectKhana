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
import PickMeals from './components/PickMeals/PickMeals';
function App() {


  // rely less on cookies 
  const [loggedIn, setLogIn] = useState(localStorage.getItem("user")!==null);
  const [numMeals, setNumMeals] = useState(0);
  const [cart, setCart] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [freq, setFreq] = useState("Select Frequency");
  const [delivDate, setDelivDate] = useState("Select Day");

  const [mealNumbers, setMealNumbers] = useState([]);



  return (
    <>
    <Nav loggedIn = {loggedIn} setLogIn = {setLogIn} cart= {cart} setCart = {setCart}
    mealNumbers = {mealNumbers}
    setMealNumbers = {setMealNumbers}
    
    />
    <Routes>
      <Route exact path="/" element={<Home loggedIn = {loggedIn} setLogIn = {setLogIn} setMeals ={setNumMeals} />}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/help" element={<Help/>}/>
      
      
      <Route exact path="/order" 
        element={<OrderPage 
          numMeals = {numMeals}
          setNumMeals = {setNumMeals}
          zipCode = {zipCode}
          setZipCode = {setZipCode}
          freq = {freq}
          setFreq = {setFreq}
          delivDate = {delivDate}
          setDelivDate = {setDelivDate}    
        />}
          
          />


      <Route exact path="/pickMeals" element={<PickMeals

          cart = {cart}
          setCart = {setCart}

          mealNumbers = {mealNumbers}
          setMealNumbers = {setMealNumbers}
        
      />}/>
    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
