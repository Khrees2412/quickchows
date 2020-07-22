import React, {Component,Fragment} from 'react';
import "../styles/delivery.css";
import {Link} from "react-router-dom"
import Navbar from "./navbar";
import Footer from"./footer";
import Delivery from "../assets/two-plates.jpg"
import Breakfast from "../assets/safe-delivery.jpg"
import Location from "../assets/pizza.jpg"
import Button from "@material-ui/core/Button"
//import RiceChicken from "../assets/rice-and-chicken.jpeg"

class DeliveryMain extends Component {
   
    render() { 
        return (
                 <Fragment>
                     <Navbar/>
                   <div className="whole-body">
                   <div className="attention"> 

                    <div className="call special">  
                    <h1>Hungry Stomach ? </h1>
                    <p>Don't fret, we got you. Trust us to
                        give you the best food service.
                    </p>
                    <h2>Food at the speed of light <i class="fas fa-thunderstorm    "></i></h2>
                    <a href="#order-now" onClick={()=>alert("nice")}id="link">View Our Offers </a>
                    </div>
                    
                    </div>

                    <div className="main-page">
                <h1>Worry less about food.</h1>
                <p>At QuickChows we know that your time is very precious,
                    which is why we came up with a plan that works best for you.</p>
                     <p>All you have to do is select a plan that best suits your current needs and we take care of the 
                     rest.</p>
                <p>QuickChows is designed to help you focus on what really matters in school,
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
                     <img src={Breakfast}  alt="Trustworthy orders" />
                    <p>Make an order you can trust, satisfying your hunger and thirst in an instant</p>
                   
                </div>
                </div>
               
                <div className="offers fc-img" id="order-now">
                <h2>Carefully curated meals for healthy living</h2>
                <Link to="/breakfast-menu">
                    <div className="offer breakfast">
                    <h3><i class="fas fa-cloud"></i>Breakfast Specials</h3>
                    </div>
                </Link>
                <Link to="/lunch-menu">
                    <div className="offer lunch">
                    <h3><i class="fas fa-sun "></i>Lunch Specials</h3>
                    </div>
                </Link>
                <Link to="/dinner-menu">
                    <div className="offer dinner">
                    <h3><i class="fas fa-moon "></i>Dinner Specials</h3>
                    </div>
                </Link>
                </div>
                
                </div>
                <Footer/>
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
                            <div class="card">
  <img src={Delivery} alt="Denim Jeans" className="img"/>
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
    </div>
                    */