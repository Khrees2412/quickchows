import React, {Component, Fragment }  from "react"
import foodItem from "./components/productsList"

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state={
            f:FoodItem
        }
    }
    render(){
    
        return(
            <Fragment>
                <ul>

                </ul>

            </Fragment>
        )
    }
}

export default Gallery;