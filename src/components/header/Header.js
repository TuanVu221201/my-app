import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo.jpg" alt="logo" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li> <Link to="/">Home</Link> </li>
                                                <li> <Link to="/blog">Blog</Link> </li>
                                                <li> <Link to="/contact">Contact</Link> </li>
                                                <li> <Link to="/login">Login</Link> </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                <form className="search">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <button><img src="images/search_icon.png" alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;