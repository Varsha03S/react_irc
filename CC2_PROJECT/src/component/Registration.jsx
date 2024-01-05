import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../assets/Registration.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Add your registration logic here, e.g., making an API call to register the user

  //   try {
  //     // Example: Make an API call to register the user
  //     const response = await axios.post("http://localhost:3001/register", {
  //       username,
  //       email,
  //       password,
  //       confirmPassword,
  //     });

  //     // Handle the response as needed
  //     console.log("Registration successful:", response.data);

  //     // Redirect to login page after successful registration
  //     window.location.href = '/login';
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      window.alert("Registration succesful. Move to Login Page!");
      window.location.href = '/';
    } else {
      window.alert("Please fill in all the required fields properly.");
    }
  };

  const validateForm = () => {
    return username && email && password && confirmPassword && (password === confirmPassword);
  };
  return (
    <div>
      <Navbar />
      <div class="register-container">
        <h2>Sign Up</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="userName"
            name="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
          <button type="submit">Sign Up</button>
          <br />
          <center>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;