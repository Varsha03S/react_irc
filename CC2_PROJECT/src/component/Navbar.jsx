import React from 'react';
import { AppBar, Toolbar,IconButton, Typography,Link } from '@mui/material';
import nomad from '../assets/nomad.png';
function Navbar() {
  return (
    <AppBar position="fixed" color="secondary"  >
    <Toolbar>
    <img src={nomad} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
        Nomad
      </Typography>


      <div>
        <IconButton color="inherit" component={Link} href="/Home" sx={{ fontSize: 'medium' }}>Home</IconButton>
        <IconButton color="inherit" component={Link} href="/Login"  sx={{ fontSize: 'medium' }}>Login</IconButton>
        <IconButton color="inherit" component={Link} href="/Register"  sx={{ fontSize: 'medium' }}>Register</IconButton>
        <IconButton color="inherit" component={Link} href="/About"  sx={{ fontSize: 'medium' }}>About</IconButton>
        <IconButton color="inherit" component={Link} href="/Services"  sx={{ fontSize: 'medium' }}>Services</IconButton>
  
      </div>
      
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

/*
// Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Link, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nomad
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
          
            <IconButton color="inherit" component={Link} href="/Home">
              Home
            </IconButton>
            <IconButton color="inherit" component={Link} href="/Login">
              Login
            </IconButton>
            <IconButton color="inherit" component={Link} href="/Registration">
              Register
            </IconButton>
            <IconButton color="inherit" component={Link} href="/About">
              About
            </IconButton>
            <IconButton color="inherit" component={Link} href="/Services">
              Services
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

 <div>
        <IconButton color="inherit" component={Link} href="/Home" sx={{ fontSize: 'medium' }}>Home</IconButton>
        <IconButton color="inherit" component={Link} href="/Login"  sx={{ fontSize: 'medium' }}>Login</IconButton>
        <IconButton color="inherit" component={Link} href="/Registration"  sx={{ fontSize: 'medium' }}>Register</IconButton>
        <IconButton color="inherit" component={Link} href="/About"  sx={{ fontSize: 'medium' }}>About</IconButton>
        <IconButton color="inherit" component={Link} href="/Services"  sx={{ fontSize: 'medium' }}>Services</IconButton>
      </div>
      

export default Navbar;
*/