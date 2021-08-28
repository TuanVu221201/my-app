import React, { Component } from 'react';
import Footer from '../footer/Footer';
class Blog extends Component {
    render() {
        return (
            <div>
                <div className="blogbg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blogtitlepage">
                                    <h2>blog</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Lastestnews */}
                <div className="Lastestnews blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <div className="news-box">
                                    <figure><img src="images/1.jpg" alt="img" /></figure>
                                    <h3> Bảo đảm việc lưu thông hàng hóa tại các tỉnh, thành phố phía Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters,
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <div className="news-box">
                                    <figure><img src="images/2.jpg" alt="img" /></figure>
                                    <h3>Cổng thông tin điện tử Sở Giao thông vận tải Quảng Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <div className="news-box">
                                    <figure><img src="images/3.jpg" alt="img" /></figure>
                                    <h3>Cổng thông tin điện tử Sở Giao thông vận tải Quảng Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="news-box">
                                    <figure><img src="images/3.jpg" alt="img" /></figure>
                                    <h3>Cổng thông tin điện tử Sở Giao thông vận tải Quảng Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="news-box">
                                    <figure><img src="images/1.jpg" alt="img" /></figure>
                                    <h3>Cổng thông tin điện tử Sở Giao thông vận tải Quảng Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="news-box">
                                    <figure><img src="images/2.jpg" alt="img" /></figure>
                                    <h3>Cổng thông tin điện tử Sở Giao thông vận tải Quảng Nam</h3>
                                    <span> March 20</span><span>Comment</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Lastestnews */}
                <Footer></Footer>
            </div>

        );
    }
}

export default Blog;