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
import CheckOut from './components/CheckOut/CheckOut';
function App() {


  // Nav, Home
  const [loggedIn, setLogIn] = useState(localStorage.getItem("user")!==null);
  
  // OrderPage
  const [numMeals, setNumMeals] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const [freq, setFreq] = useState("Select Frequency");
  const [delivDate, setDelivDate] = useState("Select Day");
  
  // Nav, PickMeals
  const [cart, setCart] = useState([]);
  const [mealNumbers, setMealNumbers] = useState([]);

  // Connecting PickMeals & OrderPage, [About,Home,Help....]
  const [resetOrderPageInfo, setResetOrderPageInfo] = useState(false);


  return (
    <>
    <Nav loggedIn = {loggedIn} setLogIn = {setLogIn} cart= {cart} setCart = {setCart}
    mealNumbers = {mealNumbers}
    setMealNumbers = {setMealNumbers}
    
    />
    <Routes>
      <Route exact path="/" element={<Home loggedIn = {loggedIn} setLogIn = {setLogIn} setMeals ={setNumMeals} setResetOrderPageInfo = {setResetOrderPageInfo} setCart ={setCart}/>}/>
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

          resetOrderPageInfo = {resetOrderPageInfo}
          setResetOrderPageInfo = {setResetOrderPageInfo}

          setMealNumbers = {setMealNumbers}
        />}
          
          />


      <Route exact path="/pickMeals" element={<PickMeals

          cart = {cart}
          setCart = {setCart}

          mealNumbers = {mealNumbers}
          setMealNumbers = {setMealNumbers}
          setResetOrderPageInfo = {setResetOrderPageInfo}
        
      />}/>

      <Route exact path = "/checkOut" element={<CheckOut/>}/>
    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
