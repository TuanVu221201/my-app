import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import User_detail from '../Users/User_details/User_detail';
import Users from '../Users/User';
import Login from '../Login/Login';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Users}></Route>
                <Route exact path="/user_detail" component={User_detail}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/blog" component={Blog}></Route>
                <Route exact path="/login" component={Login}></Route>
            </div>
        );
    }
}

export default RouterURL;