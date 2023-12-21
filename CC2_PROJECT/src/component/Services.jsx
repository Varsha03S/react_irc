import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import web from '../assets/web.jpeg';
import graphic from '../assets/graphic.jpeg';
import dgmar from '../assets/dgmar.jpeg';
import mobapp from '../assets/mobapp.jpeg';
import contentwr from '../assets/contentwr.jpeg';
import social from '../assets/social.jpeg';
import seo from '../assets/seo.jpeg';
import uiux from '../assets/uiux.jpeg';
import ecom from '../assets/ecom.jpeg';

const services = [
  {
    title: 'Web Development',
    description: 'Create responsive and user-friendly websites using the latest technologies.',
    image: web
  },
  {
    title: 'Graphic Design',
    description: 'Design visually appealing graphics and illustrations for your projects.',
    image: graphic
  },
  {
    title: 'Digital Marketing',
    description: 'Promote your business with effective digital marketing strategies.',
    image: dgmar
  },
  {
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications for iOS and Android devices.',
    image: mobapp
  },
  {
    title: 'Content Writing',
    description: 'Create engaging and SEO-friendly content for blogs, websites, and marketing materials.',
    image: contentwr
  },
  {
    title: 'Social Media Management',
    description: 'Manage and grow social media accounts, create content, and engage with followers.',
    image:social
  },
  {
    title: 'SEO Consulting',
    description: 'Optimize websites for search engines to improve visibility and organic traffic.',
    image:seo
  },
  {
    title: 'UI/UX Design',
    description: 'Design intuitive and visually appealing user interfaces for web and mobile applications.',
    image:uiux
  },
  {
    title: 'E-commerce Development',
    description: 'Build and customize e-commerce websites with secure payment gateways.',
    image:ecom
  }
];

function Services() {
  return (
    <div>
      <Navbar />
      <Container>
      <Typography variant="h4" component="div" style={{ marginTop: '20px', marginBottom: '20px' }}>
      Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    <Footer />
    </div>
  );
}

export default Services;