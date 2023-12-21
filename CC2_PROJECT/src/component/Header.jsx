import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container, Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
    <Navbar/>

    <Container  sx={{ marginTop:'15%', minHeight: '60vh', marginRight: '100%' }}>
     
      <Typography variant="h2" color="#23217d" style={{  marginTop: '50%', marginBottom: '1%' }}>
           Welcome to Nomad
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Find the perfect freelancer for your project, or discover exciting opportunities.
          </Typography>
          <Button variant="contained" color="secondary">
            Post a Job
          </Button>
          <Link to='Browsejobs'><Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }} >
          Browse Jobs
          </Button> </Link>
    </Container>
    <Footer/>
    </div>
  );
}

export default Header;

