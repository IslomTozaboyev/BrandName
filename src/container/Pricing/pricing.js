import React from 'react';
import "./pricing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Pricing extends React.Component{
    render() {
        return <div className="pricing">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="text-center text-white mt-5">
                        <h2 className="mt-5">Pricing</h2>
                        <p className="mb-5">Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="pricing__box bg-white w-100 mt-5">
                            <h3 className="fw-bold">FREE</h3>
                            <h6 className="mt-4 mb-4">Organize across all <br /> apps by hand</h6>
                            <p className="subtitle m-0">0$</p>
                            <p className="subtitle2 mb-4">Per Month</p>
                            <button className="btn w-100 p-3 mb-4">
                           <b> Try for free</b>
                            </button>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">1GB  Cloud storage</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Email and community <br /> support</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="pricing__box bg-white w-100 mt-5">
                                <h3 className="fw-bold">Silver</h3>
                                <div className="pricing__circle">
                                    New
                                </div>
                            <h6 className="mt-4 mb-4">Organize across all <br /> apps by hand</h6>
                            <p className="subtitle m-0">9.99$</p>
                            <p className="subtitle2 mb-4">Per Month</p>
                            <button className="btn w-100 p-3 mb-4">
                           <b> Try for free</b>
                            </button>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">1GB  Cloud storage</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Email and community <br /> support</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="pricing__box bg-white w-100 mt-5">
                            <h3 className="fw-bold">GOLD</h3>
                            <h6 className="mt-4 mb-4">Organize across all <br /> apps by hand</h6>
                            <p className="subtitle m-0">19.99$</p>
                            <p className="subtitle2 mb-4">Per Month</p>
                            <button className="btn w-100 p-3 mb-4">
                           <b> Try for free</b>
                            </button>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="success h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Unlimited product updates</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">1GB  Cloud storage</p>
                            </div>
                            <div className="d-flex mt-2">
                                <FontAwesomeIcon className="secondary h3 text-white rounded-circle p-2 me-2" icon={faCheck}/>
                                <p className="fw-bold">Email and community <br /> support</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Pricing;