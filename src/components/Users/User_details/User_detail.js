import React, { Component } from 'react';
import Footer from '../../footer/Footer';
class User_detail extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 ">
                            <div className="for-box">
                                <figure><i><img src="icon/icon2.png" alt="icon" /></i></figure>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <figure>
                                <h3>Nguyễn Văn E</h3>
                                <p>Ngày sinh: 2/5/1985</p>
                                <p>Số điện thoại: 2/5/1985</p>
                                <p>email: nptvu@gmail.com</p>
                                <p>Quê quán: Hà Tĩnh</p>
                                <p>Biển số xe: 38C - 25476</p>
                                <p>Công ty: Công ty cổ phần ...</p>
                                <p>Địa chỉ chính: Hà Nội</p>
                                <p>Chi nhánh: Hà Tĩnh</p>
                            </figure>
                        </div>
                    </div>
                </div>
                <div id="screenshot" className="Lastestnews">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <div className="news-box">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15174.917897286052!2d106.38547308137413!3d18.037754153171832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3138864c148f3d5b%3A0xa3eaad8bce63244f!2zR2FyYWdlIEvhu7MgVGjhu4tuaCwgUXXhu5FjIEzhu5kgMUEsIEvhu7MgVGjhu4tuaCwgS-G7syBBbmgsIEjDoCBUxKluaA!3m2!1d18.0447876!2d106.37697279999999!4m5!1s0x313889b5f53cd425%3A0x7779525f069c93d7!2zRm9ybW9zYSBIYSBUaW5oIFN0ZWVsIENvcnBvcmF0aW9uLCBL4buzIExvbmcsIEvhu7MgQW5oLCBIw6AgVMSpbmg!3m2!1d18.0295822!2d106.40407379999999!5e0!3m2!1svi!2s!4v1628959540960!5m2!1svi!2s" width="100%" height={650} style={{ border: 0 }} allowFullScreen loading="lazy">
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="news-box">
                                    <h3>Lịch sử hành trình</h3>
                                    <figure>
                                        <p>12:13PM - 18.044789, 106.376983</p>
                                        <p>12:20PM - 18.043589, 106.380795</p>
                                        <p>12:30PM - 18.043235, 106.381215</p>
                                        <p>01:30PM - 18.041939, 106.383135</p>
                                        <p>01:45PM - 18.039583, 106.386493</p>
                                        <p>02:04PM - 18.036778, 106.390956</p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default User_detail;