import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import "../styles/register.css";
import Footer from "./footer"

function Signup(){
    return(
        <Fragment>
            <div className="onboard-form">
            <h1>Back to <Link to="/" className="goto">Home</Link></h1>
            <form className="sign-box" >
                    <label>Name: </label>
                    <input type="text" />
                    <br/>

                    <label>Email: </label>
                    <input type="email" />
                    <br/>

                    <label>Password: </label>
                    <input type="password" />
                    <br/>

                    <label>Confirm Password: </label>
                    <input type="password" />
                    <br/>

                   <p><button className="btn" type="submit">Sign Up</button> Already have an account?
                   <Link to="/login" className="goto"> Login</Link> </p> 
            </form>
            <Footer/>
            </div>
        </Fragment>

    )
}
export default Signup;