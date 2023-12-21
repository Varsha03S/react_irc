import React from 'react';
import '../assets/About.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@mui/material';

function About(){
  return (
   <div> 
     <Navbar/>
    <div className="about-container">
      <Container>
      
      <h1>About Nomad</h1>
      <p>
        Welcome to Freelance Finder, your go-to platform for connecting freelancers
        with clients. Our mission is to simplify the process of finding the perfect
        freelancer for your project.
      </p>
      <p>
        Whether you are a freelancer looking for new opportunities or a client
        searching for skilled professionals, Freelance Finder is here to help you
        achieve your goals.
      </p>
      
      </Container>
    </div>
    <Footer/>

    </div>

  );
};

export default About;