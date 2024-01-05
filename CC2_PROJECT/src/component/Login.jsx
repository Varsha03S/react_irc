import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../assets/Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3001/users?email="+email );
      if (response.data.length === 0) {
        window.alert("User doesn't exist");
        return;
      }

      const user = response.data[0];

      if (user.password === password) {
        window.alert("Login successful");
        window.location.href = '/home';
      } else {
        window.alert("Incorrect password. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="login-container">
      <h2>Login</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
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
        <center>
          <button type="submit">Login</button>
        </center>
        <br />
        <center>
          <p>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </center>
      </form>
    </div>
  );
}

export default Login;