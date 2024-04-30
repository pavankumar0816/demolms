import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact">
         <h2 style={{ color: 'brown', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
            <div className="form">
                <form>
                    <div className="form-group">
                       <label>Enter Name :</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label> Enter Email :</label>
                        <input type="email" id="email"  placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Message :</label>
                        <textarea id="message"  placeholder="Enter your message" rows="2" required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
