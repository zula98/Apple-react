import React, { Component } from 'react';
import './FifthContaint.css'


import Structure from '../Containts/Structure'
class FiftyComponent extends Component {

    render() {
        return (
            <section className="fifth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="description-wraper Inter">
                                    Buy a Mac or ipad for<br /> college.Get Airpods.<sup>3</sup>
                                </div>
                                <div className="links-wrapper save">
                                    <ul>
                                        <li><a href="">Save with education pricing</a></li>

                                    </ul>
                                </div>

                                {/* <Structure title=""
                                    titleColor="black" alert=""
                                    colorClass="black" link="Save with education pricing" /> */}

                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    {/* <div className="logo-wrapper">
                                        <img src={WatchSeries5Logo}/>
                                    </div> */}
                                </div>
                                <div className="description-wraper">
                                    {/* For lovers of.Apple */}

                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Shop gifts</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FiftyComponent;