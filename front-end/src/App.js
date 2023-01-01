import Help from "./components/Help/Help";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import React from "react";
import "./index.css";
import { useState } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import OrderPage from "./components/OrderPage/OrderPage";
import PickMeals from "./components/PickMeals/PickMeals";
import CheckOut from "./components/CheckOut/CheckOut";
import ViewPlans from "./components/ViewPlans/ViewPlans";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import Hotel from "./components/Hotel/Hotel";
function App() {
  // Nav, Home
  const [loggedIn, setLogIn] = useState(localStorage.getItem("user") !== null);

  // OrderPage
  const [numMeals, setNumMeals] = useState("Select Plan"); // won't be that useful; just to trick user's mind
  const [zipCode, setZipCode] = useState("");
  const [freq, setFreq] = useState("Select Frequency");
  const [delivDate, setDelivDate] = useState("Select Day");

  // Nav, PickMeals
  const [cart, setCart] = useState([]);
  const [mealNumbers, setMealNumbers] = useState([]);

  // Connecting PickMeals & OrderPage, [About,Home,Help....]
  // 0: do NOT reset, 1: RESET Everything except Number of Meals bc we go from Home to OrderPage by selecting number of meals, 2: RESET EVERYTHING
  const [resetOrderPageInfo, setResetOrderPageInfo] = useState(0);

  const navAndFoot = (element) => {
    return (
      <>
        <Nav
          loggedIn={loggedIn}
          setLogIn={setLogIn}
          cart={cart}
          setCart={setCart}
          mealNumbers={mealNumbers}
          setMealNumbers={setMealNumbers}
        />

        {/* to make nav sticked to top */}
        <section className="stickNavBarAdjustments"></section>
        {/* About, Home, Help,... */}
        {element}
        <Footer />
      </>
    );
  };

  return (
    <>
      <Routes>
        {/* Home */}
        <Route
          exact
          path="/"
          element={navAndFoot(
            <Home
              loggedIn={loggedIn}
              setLogIn={setLogIn}
              setMeals={setNumMeals}
              setResetOrderPageInfo={setResetOrderPageInfo}
              setCart={setCart}
              setMealNumbers={setMealNumbers}
            />
          )}
        />

        {/* About */}
        <Route exact path="/about" element={navAndFoot(<About />)} />

        {/* Help */}
        <Route exact path="/help" element={navAndFoot(<Help />)} />

        {/* Order Page */}
        <Route
          exact
          path="/order"
          element={navAndFoot(
            <OrderPage
              numMeals={numMeals}
              setNumMeals={setNumMeals}
              zipCode={zipCode}
              setZipCode={setZipCode}
              freq={freq}
              setFreq={setFreq}
              delivDate={delivDate}
              setDelivDate={setDelivDate}
              resetOrderPageInfo={resetOrderPageInfo}
              setResetOrderPageInfo={setResetOrderPageInfo}
              setMealNumbers={setMealNumbers}
            />
          )}
        />

        {/* PickMeals page */}
        <Route
          exact
          path="/pickMeals"
          element={navAndFoot(
            <PickMeals
              zipCode={zipCode}
              cart={cart}
              setCart={setCart}
              mealNumbers={mealNumbers}
              setMealNumbers={setMealNumbers}
              setResetOrderPageInfo={setResetOrderPageInfo}
            />
          )}
        />

        {/* CheckOut Page */}
        <Route exact path="/checkOut" element={<CheckOut />} />

        {/* ViewPlans Page */}
        <Route exact path="/viewPlans" element={navAndFoot(<ViewPlans/>)} />

        {/* AccountInfo Page */}
        <Route
          exact
          path="/accountInfo"
          element={navAndFoot(<AccountInfo />)}
        />

        {/* Hotel Page */}
        <Route exact path="/hotel" element={<Hotel />} />
      </Routes>
    </>
  );
}

export default App;
