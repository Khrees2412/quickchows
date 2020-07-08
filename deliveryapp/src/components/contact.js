import React, { Fragment } from 'react';

function Contact (){
    return(
        <Fragment>
            <h3>You can always reach out
                 to us on our various social media handles.. </h3>

            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
            </ul>
            <h4>You can also send us a mail</h4>
            <div className="contact-form" id="form-box">
            <form>
                <label for="name">Your Name:</label>
                <input type="text"  placeholder="Full Name"/>
                <label for="email">Your Email:</label>
                <input type="email" placeholder="Email Address"/>
                <label for="message">Your Message:</label>
                <input type="textarea"  placeholder="It should be brief and straight to the point"/>
            </form>
            </div>
        </Fragment>
    )
}

export default Contact;