import '../assets/Login.css';

import {Link} from 'react-router-dom';
function Login()
{
    return(
  
        <div class="login-container">
    <h2>Login</h2>
    <br/>
      <br/>
    <form>
      <input type="email" placeholder="Email" id="email" name="email"></input>
      <input type="password" placeholder="Password" id="password" name="password"></input>
      <center><Link to='/home'><button type="submit">Login</button></Link></center>
      <br></br>
      <center><p>Don't you have an account?  <Link to='/register'>Sign up</Link></p></center>
    </form>
  </div>

    );
}

export default Login;

