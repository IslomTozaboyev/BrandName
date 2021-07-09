import React from 'react';
import "../testimonial/testimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import testimonial__img1 from "../../components/img/testimonial__img1.png";
import testimonial__img2 from "../../components/img/testimonial__img2.png";

class Testimonial extends React.Component {
    render() {
        return <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 mt-5">
                       <div className="text-center text-white mt-5">
                            <h2 className="fw-bold">What Clients Say</h2>
                            <p>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics  </p>
                        </div>
                     </div>
                        
                       <div className="testGrid d-md-flex justify-content-center align-items-center col-sm-12 col-lg-12">
                            <div className="d-flex justify-content-center align-items-center testimonial__box d-flex bg-white w-100 m-5">
                                <div>
                                    <img src={ testimonial__img1} alt="rasm" />
                                </div>
                                <div className="boxTest p-4">
                                    <h4 className="m-0">Regina Miles</h4>
                                    <p>Designer</p>
                                    <div className="d-flex mb-2">
                                    <FontAwesomeIcon className="rounded-circle text-warning testimonial__icon"  icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 text-warning" icon={ faStar}/>
                                   </div>
                                    <p>This proved to be impossible using 
                                        concepts of space and time. Einstein 
                                        new view of time first and then</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center testimonial__box d-flex bg-white w-100 m-5 ">
                                <div>
                                    <img src={ testimonial__img2} alt="rasm" />
                                </div>
                                <div className="boxTest p-4">
                                    <h4 className="m-0">Regina Miles</h4>
                                    <p>Designer</p>
                                    <div className="d-flex mb-2">
                                    <FontAwesomeIcon className="rounded-circle text-warning testimonial__icon"  icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 rounded-circle text-warning testimonial__icon" icon={ faStar}/>
                                    <FontAwesomeIcon className="ms-2 text-warning" icon={ faStar}/>
                                   </div>
                                    <p>This proved to be impossible using 
                                        concepts of space and time. Einstein 
                                        new view of time first and then</p>
                                </div>
                            </div>

                       </div>

                   
                </div>
            </div>
        </div>
    }
}

export default Testimonial;