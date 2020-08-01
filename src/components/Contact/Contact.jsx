import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <div> 
                <div id="contact"></div>
                <section className="contact-form-wrap section">
                    <div className="container uni-meta" style={{display: "flex", flexDirection:"column", alignItems: "center", paddingBottom: "45px"}}>
                            <h2>Feel free to contact me!</h2>
                            <button className="btn btn-main" name="submit" type="submit" style={{width: "225px"}} onclick="window.location.href='mailto:lrokas8@gmail.com'">Send me a message!</button>
                    </div>
                </section>
                <br/>
            </div>
        );
    }
}

export default Contact;