import React, {Fragment} from "react"
import "../styles/login.css";
import {Link} from "react-router-dom"
import Footer from "./footer"

function Login(){
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
                    
                     
                    <p><button className="btn" type="submit">Log In</button>
                    New to QuickChows? <Link to="/signup"className="goto"> Sign Up</Link></p>
            </form>
            
            </div>
            <Footer/>
        </Fragment>

    )
}
export default Login;
