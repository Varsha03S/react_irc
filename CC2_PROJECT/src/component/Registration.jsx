import '../assets/Registration.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
function Registration(){
    return(
      <div>
        <Navbar/>
    <div class="register-container">
      <h2>Sign Up</h2>
      <br/>
      <br/>
      <form>
        <input type="text" placeholder="Username" id="userName" name="userName"></input>
        <input type="email" placeholder="Email" id="email" name="email"></input>
        <input type="password" placeholder="Password" id="password" name="password"></input>
        <input type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword"></input>
        <button type="submit">Sign Up</button>
      <br/>
      <center><p>Already have an account?  <Link to='/login'>Login</Link></p></center>
    </form>
  </div>
   <Footer/>
  </div>
);
}
export default Registration;