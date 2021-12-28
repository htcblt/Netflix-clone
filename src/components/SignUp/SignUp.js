import React, { useState, useRef } from 'react'
import { auth } from '../../api/firebase'
import './SignUp.css'
const SignUp = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)

  async function handleRegister(e) {
    e.preventDefault()
    try {
      auth.signInWithEmailAndPassword(email, password).then((authUser) => {
        console.log(authUser)
      })
    } catch (error) {
      setErrorMsg(error.message)
    }
  }
  return (
    <div className="signUpScreen">
      <form onSubmit={handleRegister}>
        <h1>Sign Up</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
        {errorMsg && <div>{errorMsg}</div>}

        <h4>New to Netflix </h4>
      </form>
    </div>
  )
}
export default SignUp
