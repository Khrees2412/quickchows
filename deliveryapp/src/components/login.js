import React, {Fragment} from "react"

function Login(){
    return(
        <Fragment>
            <form>
                    <label>Email: </label>
                    <input type="email" />
                    <br/>

                    <label>Password: </label>
                    <input type="password" />
                    <br/>
                    
                    <button type="submit">Log In</button> 
            </form>
        </Fragment>

    )
}
export default Login;