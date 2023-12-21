import React from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Services from './component/Services';
import About from './component/About';
import Registration from './component/Registration';
import ContactUs from './component/ContactUs';
import FAQ from './component/FAQ';
import Browsejobs from './component/Browsejobs';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    	<Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/Browsejobs" element={<Browsejobs/>}/>   
       </Routes> 
    <Footer/>
    </div>
  );
  
}

export default App;

/* rd

import { Routes,Route } from 'react-router-dom';
<Routes>
<Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      */