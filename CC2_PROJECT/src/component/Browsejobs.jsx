import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@mui/material';
const jobData = [
  { id: 1, title: 'Web Developer', description: 'Frontend and backend development', location: 'Remote' },
  { id: 2, title: 'Graphic Designer', description: 'Create visually appealing designs', location: 'On-site' },
  { id: 3, title: 'Content Writer', description: 'Write engaging and informative content', location: 'Remote' },

];

function Browsejobs(){
  return (
    <div>
        <Navbar/>

    <div style={{ marginLeft: '220px', padding: '20px' }}>
    <Container>
      <h2>Browse Jobs</h2>
      <ul>
        {jobData.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            {/* Add more job details as needed */}
            <button> Apply</button>
            <hr />
          </li>
        ))}
      </ul>
      </Container>
    </div>
    <Footer/>
    </div>
  );
};

export default Browsejobs;
