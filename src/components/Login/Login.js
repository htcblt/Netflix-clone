import React ,{useState}from "react";
import "./Login.css";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";


const Login = ()=>{
    
    const[signIn,SetSignIn]=useState(false);
    const[singUp,SetSignUp]=useState(false);

    return(
        <div className="login">
            <div className="login_header">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" className="login__logo"/>
                <button className="login_button"  onClick={()=>SetSignIn(true)}>
                    Sign In
                </button>
            </div>
            <div className="login_body">
                {
                    signIn?(<SignIn/>):(
                        singUp?(<SignUp/>):(
                        <>
                          <h1>Unlimited movies, TV shows, and more.</h1>
                          <h2>Watch anywhere. Cancel anytime.</h2>
                          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <form className="login_form">
                         <input type="text" placeholder="Email Address"/>
                         <button onClick={()=>SetSignUp(true)}>Get Started</button>
                        </form>
                        </>
                        )
                    )
                }
              
            </div>
            <div className="login_gradient"></div>

        </div>

    );
};
export default Login;