import React from 'react';
import "./location.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Location extends React.Component{
    render() {
        return <div className="location">
            <div className="container">
                   <div className="location__section text-center text-white mt-5"> 
                        <h2 className="mt-5">Get In Touch</h2>
                        <p className="mb-5">Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                <div className="row d-flex justify-content-center align-items-center">
                    
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mt-5">
                        <div className="location__box">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                            <p className="m-0 mt-4"><b>georgia.young@example.com</b></p>
                            <p className="m-0 mb-4"><b>georgia.young@ple.com</b></p>
                            <h5 className="mb-3 fw-bold">Get Support</h5>
                            <button className="btn btn-primary mt-2">Submit Request</button>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mt-5">
                        <div className="location__box">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                            <p className="m-0 mt-4"><b>georgia.young@example.com</b></p>
                            <p className="m-0 mb-4"><b>georgia.young@ple.com</b></p>
                            <h5 className="mb-3 fw-bold">Get Support</h5>
                            <button className="btn btn-primary mt-2">Submit Request</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mt-5">
                        <div className="location__box">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                            <p className="m-0 mt-4"><b>georgia.young@example.com</b></p>
                            <p className="m-0 mb-4"><b>georgia.young@ple.com</b></p>
                            <h5 className="mb-3 fw-bold">Get Support</h5>
                            <button className="btn btn-primary mt-2">Submit Request</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Location;