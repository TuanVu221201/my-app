import React, { Component } from 'react';
import List_user from './data/List_user.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class List_User extends Component {
    render() {
        return (
            <div>
                <div className="row customer-logos slider">
                    {List_user.map((user, index) => {
                        return (

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="for-box">
                                    <Link to="/user_detail">
                                        <button>
                                            <i><img src={user.img} alt="icon" height="215px" width="215px" /></i>
                                            <h3>{user.name}</h3>
                                            <p>Ngày sinh: {user.birth}</p>
                                            <p>Quê quán: {user.que}</p>
                                            <p>Biển số xe: {user.BienSo}</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        );
    }
}

export default List_User;