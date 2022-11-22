
/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */


import React from 'react'
import Nav from "../NavBar/Nav";
import Showcase from '../Showcase/Showcase';
import AnimatedBoxes from '../AnimatedInformationBoxes/AnimatedBoxes';
import Newsletter from '../Newsletter/Newsletter';
import Boxes from '../Boxes/Boxes';
import InformationBox from '../InformationBox/InformationBox';
import Question from '../Questions/Question';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  const firstBox =  {
    image: require("../../Resources/thali3.png"),
    textPosition: "r",
    backgroundColor: "secondary",
    textColor:"light",
    title:"Welcome to Home Page",
    subtitile: "Welcome to Home Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
}


const secondBox =  {
  image: require("../../Resources/newthali.png"),
  textPosition: "l",
  backgroundColor: "light",
  textColor:"dark",
  title:"Welcome to Home Page",
  subtitile: "Welcome to Home Page",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
}
  return (
   <>
      <Showcase/>
      <InformationBox data={firstBox}/>
      <Newsletter/>
      <Boxes/>
      <InformationBox data={firstBox}/>
      <InformationBox data = {secondBox}/>
      <Question/>
      <Contact/>
    </>
  );
}

export default Home;