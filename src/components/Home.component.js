import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css'
import {Row,Col} from 'react-bootstrap'


class Home extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="description" content="Wedding Bellz" />
                    <title>Wedding Bellz</title>

                </Helmet>
                <Row>
                    <Col><img src={require("./img/logo1.png")} alt="" /> </Col>
                    <Col>
                        <div className="container-fluid">
                            <div className="hero__text">
                                <img src={require("./img/icon/hi.png")} alt="" />
                                <h5>Welcome to Wedding Bellz</h5>
                                <h2>Plan the perfect wedding</h2>
                                <p>Your Wedding ,Your Way. </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <section className="services spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Our services</h2>
                                    <img src={require("./img/icon/ti.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <img src={require("./img/icon/camera.png")} alt="" />
                                    <a href="./p&v.html"><h4>Photos & Video</h4></a>
                                    <p>Photographer,Cinema/Video,Pre-Wedding.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <img src={require("./img/icon/makeup.png")} alt="" />
                                    <a href="./makeup.html"><h4>Makeup</h4></a>
                                    <p>Bridal Makeup,Family Makeup.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <img src={require("./img/icon/review.png")} alt="" />
                                    <a href="./Destination.html"><h4>Destination</h4></a>
                                    <p>Banquet Hall,Resort.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <img src={require("./img/icon/bride.png")} alt="" />
                                    <a href="./bride.html"><h4>Bridal Wear</h4></a>
                                    <p>Lenghas,Saree.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <img src={require("./img/icon/suit.png")} alt="" />
                                    <a href="./groom.html"><h4>Groom Wear</h4></a>
                                    <p>Sherwani,Tuxes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home 