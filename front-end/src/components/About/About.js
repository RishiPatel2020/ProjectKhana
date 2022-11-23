/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */

import React from 'react'

import InformationBox from '../InformationBox/InformationBox';


const About = () => {

   const firstBox =  {
        image: require("../../Resources/newthali.png"),
        textPosition: "r",
        backgroundColor: "primary",
        textColor:"dark",
        title:"Welcome to About Page",
        subtitile: "Welcome to About Page",
        description: "Almost any given Indian cuisine takes 3 hours to prepare, cook, serve, and clean. Do you ever notice how despite all this effort and time, it still takes less than 30 minutes to finish eating it? What about that time when you had to prepare for an important meeting the following day but also had to juggle making food for dinner AND lunch. It's dreadful, we understand. Mirchi Meals seeks to alleviate the pressure and pain of having to spend time in the kitchen so you can spend more time doing what’s important. Our top rated kitchen partners help us curate combinations specifically for the Indian cuisine experience. Mirchi Meals aims to bring customers the best in quality, price, and quantity of meals available in their area to enjoy whenever and wherever. Order all your meals for the week on Mirchi Meals, get them delivered in one go, and reheat to enjoy. Give it a go! P.S. Make sure you clean your fingers after you lick them!"
    }


    const secondBox =  {
        image: require("../../Resources/thali2.png"),
        textPosition: "l",
        backgroundColor: "light",
        textColor:"dark",
        title:"Welcome to About Page",
        subtitile: "Welcome to About Page",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
    }
  return (
    <>

    <InformationBox data = {firstBox}/>
    <InformationBox data={secondBox}/>
      
    
    </>
     
  )
}

export default About