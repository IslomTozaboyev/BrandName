import React from 'react';
import "../About/about.css";
import about__img from "../../components/img/about__img.jpg";
import about__circle from "../../components/img/about__circle.png";
import about__sms from "../../components/img/about__sms.png";

class About extends React.Component{
    render() {
        return <div className="about">
            <div className="container">
                <div className="row text-align-center">
                        <div className="text-center text-white mt-5">
                            <h2 className="mb-3">About Us</h2>
                            <p>Problems trying to resolve the conflict between <br /> 
                               the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    <div className="col-12 col-md-6 col-lg-6  mt-5">
                        <div className="about__box d-flex align-items-center ms-5 mt-5">
                            <div className="me-5">
                                <img className="w-100" src={about__img} alt="rasm" />
                            </div>
                        </div>
                    </div>

                    <div className="about__text col-12 col-md-6">
                         <div className="text-white ms-5 mt-5">
                                <h4>Most trusted in our field</h4>
                                <p className="mb-4">Most calendars are designed for teams. Slate 
                                    is designed for freelancers who want a 
                                    simple way to plan their schedule.</p>
                            <div className="mb-4">
                                <img className="me-3" src={about__circle} alt="rasm" />
                                <b>the quick fox jumps over the lazy dog</b> <br />
                                Things on a very small scale ... 
                                </div>
                            <div>
                                <img className="me-3" src={about__sms} alt="rasm" />
                                    <b>the quick fox jumps over the lazy dog </b><br />
                                    Things on a very small scale ...
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default About;