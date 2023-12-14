function Login()
{
    return(
        <div class="login-container">
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" id="email" name="email"></input>
      <input type="password" placeholder="Password" id="password" name="password"></input>
      <button type="submit">Login</button>
      <br></br>
      <p>Don't you have an account?  <a href="url">Sign up</a></p>
    </form>
  </div>
    );
}

export default Login;