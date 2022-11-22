import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import Nav from './components/NavBar/Nav';
import {Route,Routes} from 'react-router-dom'; 
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/ProjectKhana" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="#/about" element={<About/>}/>

    </Routes> 

    <Footer/>


    
    </>
    
  )
}

export default App;
