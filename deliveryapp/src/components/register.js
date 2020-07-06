import React, {Fragment} from "react"

function Signup(){
    return(
        <Fragment>
            <form>
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

                    <button type="submit">Sign Up</button> 
            </form>
        </Fragment>

    )
}
export default Signup;