import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footr>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 width">
                                <div className="address">
                                    <h3>Contact Us</h3>
                                    <ul className="locarion_icon">
                                        <li><img src="icon/1.png" alt="icon" />104 New York , USA</li>
                                        <li><img src="icon/2.png" alt="icon" />Phone : ( +71 5896547 )</li>
                                        <li><img src="icon/3.png" alt="icon" />Email : demo@email.com</li>
                                    </ul>
                                    <ul className="contant_icon">
                                        <li><img src="icon/fb.png" alt="icon" /></li>
                                        <li><img src="icon/tw.png" alt="icon" /></li>
                                        <li><img src="icon/lin(2).png" alt="icon" /></li>
                                        <li><img src="icon/instagram.png" alt="icon" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 width">
                                <div className="address">
                                    <h3>Get In Touch</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input className="contactus" placeholder="Name" type="text" name="Name" />
                                            </div>
                                            <div className="col-sm-12">
                                                <input className="contactus" placeholder="Phone" type="text" name="Email" />
                                            </div>
                                            <div className="col-sm-12">
                                                <input className="contactus" placeholder="Email" type="text" name="Email" />
                                            </div>
                                            <div className="col-sm-12">
                                                <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                                            </div>
                                            <div className="col-sm-12">
                                                <button className="send">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footr>
        );
    }
}

export default Footer;