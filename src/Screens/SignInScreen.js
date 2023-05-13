import React from 'react'
import "./SignInScreen.css"

function SignInScreen() {
  
  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign in</h1>
        <input placeholder='Email' type="email"/>
        <input placeholder='Password' type="password"/>
        <button type='submit'>Sign In</button>
        <h4>
          <span className='singInScreen__grey'>New to Netflix? </span>
          <span className='singinScreen__link'>SignUp now.</span>
          
          </h4>
      </form>
    </div>
  )
}

export default SignInScreen