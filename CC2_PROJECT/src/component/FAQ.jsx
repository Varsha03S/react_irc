
import React from 'react';

const FAQ= () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Frequently Asked Questions</h2>

      <div>
        <h3>1. How do I create an account?</h3>
        <p>
          To create an account, click on the "Register" button in the navigation bar. Fill out the required information
          and follow the prompts to complete the registration process.
        </p>
      </div>

      <div>
        <h3>2. How can I apply for freelance jobs?</h3>
        <p>
          Browse available jobs on the "Browse Jobs" page. Click on a job to view details and apply. You must be
          logged in to apply for jobs.
        </p>
      </div>

      <div>
        <h3>3. Can I post my own freelance opportunities?</h3>
        <p>
          Currently, only registered employers can post freelance opportunities. If you are an employer, log in and
          navigate to the "Post a Job" section.
        </p>
      </div>
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <h3 style={{ color: 'purple' }}>Have more questions?</h3>
        <p>Contact our support team at support@nomad.com for further assistance.</p>
      </div>
    </div>
  );
};

export default FAQ;
