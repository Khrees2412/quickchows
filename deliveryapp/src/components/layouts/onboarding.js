import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import "../styles/onboarding.css";
import Footer from "./footer"

function Signup(){
   const handleClick = (e) => {
        e.preventDefault();
        alert("good choice!! ")
    }
    return(
        <Fragment>
            <div className="onboard-form">
            <h1>Back to <Link to="/" className="goto">Home</Link></h1>
            <form className="sign-box" >
            <form method="POST" action="/signup">
                    <div className="input-tag">
                    <label>Name: </label>
                    <input type="text" name="name"/>
                    </div>
                    <br/>

                    <div className="input-tag">
                    <label>Phone Number: </label>
                    <input type="tel" name="tel" />
                    </div>
                    <br/>
                   
                    <div className="input-tag">
                    <label>Email: </label>
                    <input type="email" name="email"/>
                    </div>
                    <br/>

                    <div className="input-tag">
                    <label>Password: </label>
                    <input type="password" name="pwd" />
                    </div>
                    <br/>

                    <div className="input-tag">
                    <label>Confirm Password: </label>
                    <input type="password" name="pwd"/>
                    </div>
                    <br/>

                </form>
                <button className="btn" onClick={handleClick} type="submit">Sign Up</button> 
                   <p>Already have an account?<Link to="/login" className="goto">
                        Login</Link> </p> 
            </form>
            <Footer/>
            </div>
        </Fragment>

    )
}
export default Signup;


export function Login(){
    return(
        <Fragment>
            <div className="onboard-form">
                <h1>Back to <Link to="/" className="goto">Home</Link></h1>
            <form  className="login-box">
                    <label>Email: </label>
                    <input type="email" />
                    <br/>

                    <label>Password: </label>
                    <input type="password" />
                    <br/>
                    
                    <button className="btn" type="submit">Log In</button>
                    <p>New to QuickChows? <Link to="/signup"className="goto"> Sign Up</Link></p>
            </form>
            
            </div>
            <Footer/>
        </Fragment>

    )
}
