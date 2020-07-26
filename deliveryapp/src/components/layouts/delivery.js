import React, {Component,Fragment} from 'react';
import "../styles/delivery.css";
import {Link} from "react-router-dom"
import Navbars from "./navbar";
import Footer from"./footer";
import Delivery from "../assets/two-plates.jpg"
import Order from "../assets/safe-delivery.jpg"
import Location from "../assets/pizza.jpg"
import Breakfast,{Lunch,Dinner} from "./offers"


class DeliveryMain extends Component {
   
    render() { 
        return (
                 <Fragment>
                     <Navbars/>
                   <div className="whole-body">
                   <div className="attention"> 

                    <div className="call special">  
                    <h1>Hungry Stomach ? </h1>
                    <p>Don't fret, we got you. <br/>Trust us to
                        give you the best food service.
                    </p>
                    <h4>Food at the speed of light <i class="fas fa-thunderstorm    "></i></h4>
                    <a href="#order-now" id="link">View Our Offers </a>
                    </div>
                    
                    </div>

                    <div className="main-page">
                <h3>Worry less about food.</h3>
                <p>At QuickChows we know your time is precious,
                    which is why we came up with a plan that caters to your needs.
                     All you have to do is select a plan that best suits your needs and we take care of the 
                     rest.
                QuickChows is designed to help you focus on what really matters in school,
                     eliminating the stress of cooking or walking to get food.</p>
                    
                     </div>
            
            <div className="gallery">
    
                <div className="usp card">
                    <img src={Delivery} alt="Anywhere you are in town" />
                     <p>Food from where you want, when you want, wherever you want!</p>
                </div>
                <br/>
                <div  className="usp card">
                <img src={Location} alt="The best staff" />
                    <p>Highly trained for best service</p>
                </div>
                <br/>
                <div className="usp card">
                     <img src={Order}  alt="Trustworthy orders" />
                    <p>Make an order you can trust, satisfying your hunger and thirst in an instant</p>
                   
                </div>
                </div>
               
                <div className="offers fc-img" id="order-now">
                <h2>Carefully curated meals for healthy living</h2>
                <div className="offer breakfast">
                    <Breakfast/>               
                </div>
                <div className="offer lunch">
                    <Lunch/>
                </div>
                    <div className="offer dinner">
                        <Dinner/>                 
                    </div>
               
                </div>
                
                </div>

                <Footer/>
                </Fragment>
                
            
          );
    }
}
 
export default DeliveryMain;
/*
 <Link to="/breakfast-menu"> 
                <Link to="/lunch-menu">
                <Link to="/dinner-menu">

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
                            <div class="card">
  <img src={Delivery} alt="Denim Jeans" className="img"/>
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
    </div>
                    */