
/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */


import React from 'react'
import Showcase from '../Showcase/Showcase';
import Newsletter from '../Newsletter/Newsletter';
import Boxes from '../Boxes/Boxes';
import InformationBox from '../InformationBox/InformationBox';
import Question from '../Questions/Question';
import Contact from '../Contact/Contact';
import InformationGrid from '../InformationGrid/InformationGrid';

const Home = ({loggedIn, setLogIn}) => {
  const firstBox =  {
    textPosition: "r",
    backgroundColor: "primary",
    textColor:"dark",
    title:"Welcome to Home Page",
    subtitile: "Welcome to Home Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
}


const secondBox =  {
  image: require("../../Resources/newthali.png"),
  textPosition: "l",
  backgroundColor: "primary",
  textColor:"dark",
  title:"Welcome to Home Page",
  subtitile: "Welcome to Home Page",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
}

const saveTime = {


  
  heading:"How You Save Time",
  image1:require("../../Resources/step1.png"),
  image1Height:"150px",
  image1Width:"250px",
  title1:"Choose Your Meals and Plan",
  description1:"We curate meals to have combinations of foods that allow you to have a traditional Indian experience. Choose from a minimum of at least 4 savory meals available in your area and recurring or one-off plans.",


  
  image2:require("../../Resources/step2.png"),
  image2Width:"250px",
  image2Height:"150px",
  title2:"Receive Your Delivery ",
  description2:"We understand you’re busy working or taking the kids to their activities, that's why we deliver all your meals contactless. Choose from our convenient days of delivery and receive all your meals for the week in one go.",

  image3:require("../../Resources/step3.png"),
  image3Width:"250px",
  image3Height:"150px",
  title3:"Enjoy Your Meals",
  description3:"Our food is cooked to last your loved ones and you for up to 5 to 7 days when placed in the fridge. Our meal containers are BPA free, meaning you can microwave meals throughout the week and enjoy your meals right away! No more having to plate portions."
  
};



const stats = {

  heading:"Unapologetically Amazing",
  image1:require("../../Resources/customers.png"),
  image1Height:"150px",
  image1Width:"345.95px",
  title1:"110+ Customers",
  description1:"Customers range from all backgrounds: programmers, students, cricket enthusiasts, soccer moms, finance heads, and even military veterans.",


  
  image2:require("../../Resources/satisfiction.png"),
  image2Width:"241.44px",
  image2Height:"150px",
  title2:"97% Satisfaction Rate",
  description2:"Customers have repeatedly praised Mirchi Meals’ affordability, quantity and pure taste",

  image3:require("../../Resources/kitchen.png"),
  image3Width:"313.80px",
  image3Height:"150px",
  title3:"8+ Top Rated Kitchens",
  description3:"Across New Jersey, we are currently partnered with 8 top rated kitchens. Don’t worry, we’ll also get to your state as well ;)"
  
};
  return (
   <>
      <Showcase loggedIn = {loggedIn} setLogIn = {setLogIn}/>
      <InformationGrid data={saveTime}/>
      <Newsletter/>
      <Boxes/>
      <InformationGrid data={stats}/>
      <InformationBox data = {secondBox}/>
      <Question/>
      <Contact/>
    </>
  );
}

export default Home;