import React, { Fragment } from 'react';
import  "../styles/partner.css"

function Partners (){
    return(
        <Fragment>
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
            <h4>You can also send us a mail</h4>
            <div className="contact-form" id="form-box">
            <form action="/contact" method="POST">
                <label for="name">Your Name:</label>
                <input type="text"  placeholder="Full Name"/>
                <label for="email">Your Email:</label>
                <input type="email" placeholder="Email Address"/>
                <label for="message">Your Message:</label>
                <input type="textarea"  placeholder="It should be brief and straight to the point"/>
                <button type="submit">Send</button>
            </form>
            </div>
        </Fragment>
    )
}

export default Partners;