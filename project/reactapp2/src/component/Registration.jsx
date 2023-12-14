function Registration(){
    return(
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
      <p>Already have an account?  <a href="url">Login</a></p>
    </form>
  </div>
);
}
export default Registration;