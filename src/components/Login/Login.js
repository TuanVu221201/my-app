import React, { Component } from 'react';
import Footer from '../footer/Footer';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blogtitlepage">
                                    <h2>Đăng ký hoặc đăng nhập tài khoản</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div><strong>Tạo tài khoản</strong>
                                <div className="content">
                                    <p>Nếu đã có tài khoản thì hãy đăng nhập!</p>
                                    <form action="#" method="post">
                                        <ul className="form-list">
                                            <li>
                                                <label htmlFor="email">Họ và Tên <span className="required">*</span></label>
                                                <br />
                                                <input type="text" title="Name" className="input-text" id="name" defaultValue placeholder="Nhập họ và tên không dấu" name="name" autofocus required />
                                            </li>
                                            <li>
                                                <label htmlFor="email">Email <span className="required">*</span></label>
                                                <br />
                                                <input type="text" title="Email Address" className="input-text" id="email" defaultValue placeholder="Nhập email" name="email" required />
                                            </li>
                                            <li>
                                                <label htmlFor="pass">Mật khẩu <span className="required">*</span></label>
                                                <br />
                                                <input type="password" title="Password" id="pass" className="input-text" placeholder="Nhập mật khẩu" name="customer_password" required />
                                            </li>
                                            <li>
                                                <label htmlFor="pass">Số điện thoại <span className="required">*</span></label>
                                                <br />
                                                <input type="sdt" title="sdt" id="sdt" placeholder="Nhập số điện thoại" className="input-text" name="customer_phone" required />
                                            </li>
                                        </ul>
                                        <p className="required">* Bắt buộc</p>
                                        <div className="buttons-set">
                                            <button id="send2" name="dangky" type="submit" className="submit-btn" onclick="checkEmail()"><span>Đăng
                                                ký</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div><strong>Đăng nhập tài khoản</strong>
                                <div className>
                                    <p>Nếu chưa có tài khoản thì hãy đăng ký tài khoản</p>
                                    <form action="#" method="post">
                                        <ul className="form-list">
                                            <li>
                                                <label htmlFor="email">Email <span className="required">*</span></label>
                                                <br />
                                                <input type="text" title="Email Address" className="input-text" id="email" name="email" placeholder="Nhập email" required />
                                            </li>
                                            <li>
                                                <label htmlFor="pass">Mật khẩu <span className="required">*</span></label>
                                                <br />
                                                <input type="password" title="Password" id="pass" placeholder="Nhập mật khẩu" className="input-text" name="password_account" required />
                                            </li>
                                        </ul>
                                        <p className="required">* Bắt buộc</p>
                                        <div className="buttons-set">
                                            <button id="send2" name="send" type="submit" className="submit-btn" onclick="checkEmail()"><span>Đăng
                                                nhập</span></button>
                                            <a className="forgot-word" href="#">Bạn quên mật khẩu?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Login;