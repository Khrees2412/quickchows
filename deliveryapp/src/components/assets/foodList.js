import React, {Component, Fragment }  from "react"
import FoodItem from "./components/foodGallery"

class FoodList extends Component{
    constructor(props){
        super(props)
        this.state={
            f:FoodItem
        }
    }
    render(){
    const foods =  FoodItem.map(food => <li>{food.name}</li>)
        return(
            <Fragment>
                <ul>
                    {foods}
                </ul>

            </Fragment>
        )
    }
}

export default FoodList;