import React, { Fragment } from 'react';
import Navbar from "./navbar"
import  "../styles/partner.css"

function Partners (){
    return(
        <Fragment>
          <Navbar/>
            
            <div className="contact-form" id="form-box">
            <form action="/contact" method="POST">
            <h4 className="h4"> Send us a mail</h4>
                <label for="name">Your Name:</label>
                <input className="input" type="text"  placeholder="Full Name"/>
                <label for="email">Your Email:</label>
                <input className="input" type="email" placeholder="Email Address"/>
                <label for="message">Your Message:</label>
                <textarea className="input"  placeholder="It should be brief and straight to the point" />
                <button className="btn-form" type="submit">Send</button>
            </form>
            </div>
        </Fragment>
    )
}

export default Partners;
/*
  <h3>You can always reach out
                 to us on our various social media handles.. </h3>
            <div className="social">
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
            </ul>
            </div>
            */