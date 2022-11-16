import { useState } from 'react';
import Modal from './components/ModalPopUp/ModalPopUp';
import Nav from './components/NavBar/Nav';
import './App.css';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Question from './components/Questions/Question';
import InformationBox2 from './components/InformationBox2/InformationBox2';
import InformationBox1 from './components/InformationBox1/InformationBox1';
import Boxes from './components/Boxes/Boxes';
import Newsletter from './components/Newsletter/Newsletter';
import Showcase from './components/Showcase/Showcase';
function App() {

  const [open, setOpen] = useState(false);


  

  return (
    <>


      <Nav/>
      <Showcase/>
      <Newsletter/>
      <Boxes/>
      <InformationBox1/>
      <InformationBox2/>
      <Question/>
      <Contact/>
      <Footer/>
      

      
      

    </>
  )
}

export default App;
