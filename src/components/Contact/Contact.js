import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contactbg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contacttitlepage">
                                    <h2>contact</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 offset-md-3">
                            <div className="address">
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

        );
    }
}

export default Contact;