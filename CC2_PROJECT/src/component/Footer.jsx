import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (

        <AppBar position="fixed" color="secondary" style={{top: 'auto',bottom: 0,position: 'fixed',width: '100%'}}>
        <Toolbar>
        <div style={{ flex: 1 }}>
          
          <Typography variant="caption" color="ActiveCaption">
            © 2023 Nomad platform. All rights reserved.
          </Typography>
        </div>
        <div>
          <IconButton color="inherit" component={Link} href="/terms" sx={{ fontSize: 'small' }}>
            Terms
          </IconButton>
          <IconButton color="inherit" component={Link} href="/privacy" sx={{ fontSize: 'small' }}>
            Privacy
          </IconButton>
          <IconButton color="inherit" component={Link} href="/faq" sx={{ fontSize: 'small' }}>
            FAQ
          </IconButton>
          <IconButton color="inherit" component={Link} href="/contact" sx={{ fontSize: 'small' }} >
            Contact
          </IconButton>
        </div>
        <div>
          <IconButton color="inherit" component={Link} href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} href="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;

