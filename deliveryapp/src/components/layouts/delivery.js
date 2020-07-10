import React, {Component,Fragment} from 'react';
import "../styles/delivery.css"
import Delivery from "../assets/two-plates.jpg"
import Breakfast from "../assets/safe-delivery.jpg"
import Location from "../assets/pizza.jpg"
import RiceChicken from "../assets/rice-and-chicken.jpeg"

class DeliveryMain extends Component {
    handleClick(e){
        e.preventDefault();
        alert("good choice!! ")
    }
    render() { 
        return (
                 <Fragment>
                   <div className="whole-body">
                   <div className="attention">       
                    <div className="call special">  
                    <h1>Hungry Stomach ? </h1>
                    <p>Don't fret, we got you</p>
                    <a href="#order-now" id="link">Make an Order</a>
                    </div>
                    </div>
                    <div className="main-page">
                <h2>Worry less about food.</h2>
                <p>We offer the best food delivery service around campus.
                     Make an order,
                     pay and get your food in 20 minutes or less.</p>
                <p>QuickChows is designed to help you focus on what really matters in school,
                     eliminating the stress of cooking or walking to get food.</p>
                     
                     </div>
            
            <div className="gallery">
                <div className="talk-box">
                    <img src={Delivery} alt="The best staff"  />
                    <p>Food from where you want, when you want, wherever you want!</p>
                </div>
                <br/>
                <div  className="talk-box">
                    <img src={Location}  alt="Anywhere you are in town" />
                    <p>Our delivery staff consists of well trained individuals 
                    who serve customers in the best possible way</p>
                </div>
                <br/>
                <div className="talk-box">
                <img src={Breakfast}  alt="Trustworthy orders" />
                    <p>Make an order you can trust, satisfying your hunger and thirst in an instant</p>
                </div>
                <div className="usp"></div>
                <div className="usp"></div>
                <div className="usp"></div>
                </div>
                <div className="form-container" id="order-now">
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
                <div className="items">
                </div>
                </div>
                </Fragment>
                
            
          );
    }
}
 
export default DeliveryMain;
/*
<img src={RiceChicken} />
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