import React, {Component,Fragment} from 'react'

class DeliveryMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClick(e){
        e.preventDefault();
        alert("good choice!! ")
    }
    render() { 
        return (
                 <Fragment>
                   <div className="main-header">
                       <div>
                       <img src="" alt="" />
                <h1>Hungry Stomach ? </h1>
                    <p>Don't fret, we got you</p>
                    </div>
                    <div className="main-page">
                <h2>Worry less about food.</h2>
                <p>We offer the best food delivery service around campus.
                     Make an order,
                     pay and get your food in 20 minutes or less.</p>
                <p>QuickChows is designed to help you focus on what really matters in school,
                     eliminating the stress of cooking or walking to get food.</p>
                     <button>Make an Order</button>
                     </div>
            <div className="main-container">
                <div className="thebest">
                    <img src={"../images-svg/delivery.svg"} alt="good food  at hand" />
                    <p>Food from where you want, when you want, wherever you want!</p>
                </div>
                <div className="quickdelivery">
                    <img src="" alt="the best delivery in town" />
                    <p>Our delivery staff consists of well trained individuals 
                    who serve customers in the best possible way</p>
                </div>
                <div className="order">
                    <img src="" alt="quick order quick delivery is our other name" />
                    <p>Make an order you can trust, satisfying your hunger and thirst in an instant</p>
                </div>
                </div>
                <div className="form-container">
                <form>
                    <label>Name: </label>
                    <input type="text" />
                    <br/>

                    <label>Phone Number: </label>
                    <input type="number" />
                    <br/>

                    <label>Location: </label>
                    <select>
                        <option>  </option>
                        <option>Under G</option>
                        <option>Oke Afin</option>
                        <option>Adenike</option>
                        <option>Stadium</option>
                    </select>
                    <br/>
                   
                    <label>Food type:</label>
                    <select>
                        <option>   </option>
                        <option>Beans</option>
                        <option>Rice</option>
                    </select>
                    <br/>

                    <button onClick={this.handleClick} color="primary">Submit</button>
                </form>
                </div>
                </div>
                </Fragment>
                
            
          );
    }
}
 
export default DeliveryMain;
/*
                    <label>Preferred Purchase Venue: </label>
                    <select>
                        <option> Alata   </option>
                        <option>Icy-creamy</option>
                        <option>Purple & Vanilla</option>
                    </select>
                    import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
<AppBar title="GRABZONE" />

                    <Button variant="contained" color="primary">make an Order </Button>
                    */