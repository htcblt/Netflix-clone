import React, { useRef } from "react";
import { auth } from "../../api/firebase";
import "./SignIn.css"
const SignIn =()=>{

    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    
    const signIn=(e)=>{
       e.preventDefault(); 
       auth.signInWithEmailAndPassword(
             
            emailRef.current.value,
            passwordRef.current.value
       ).then(authUser=>{
           console.log(authUser)
       }).catch(error=>{alert(error.message)})
    }
    return(
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={signIn}>Sign In</button>

                <h4>New to Netflix </h4>
            </form>
            
        </div>
    )
}
export default SignIn;