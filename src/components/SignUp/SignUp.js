import React, { useRef } from "react";
import { auth } from "../../api/firebase";
import "./SignUp.css"
const SignUp =()=>{

    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
    }
    
    return(
        <div className="signUpScreen">
            <form>
                <h1>Sign Up</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={register}>Sign Up</button>

                <h4>New to Netflix </h4>
            </form>
            
        </div>
    )
}
export default SignUp;