import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    render() {
        return <div className="footer">
            <div className="container">
                <div className="row">
                   <div className="mt-5 text-white d-flex justify-content-between align-items-center">
                        <h4 className="mt-5">BrandName</h4>
                      <div className="m-0">
                           <FontAwesomeIcon className="m-0 h5 ms-4" icon={faPhone}/>
                           <FontAwesomeIcon className="m-0 h5 ms-4" icon={faPhone}/>
                           <FontAwesomeIcon className="m-0 h5 ms-4" icon={faPhone}/>
                      </div>
                   </div>
                        <hr className="bg-white" />
                
                <div className="footer__finish col-12 col-sm-6 col-md-6 col-lg-12">
                        <ul className="d-flex">
                        <div className="d-flex footer__link">
                           <div>
                                <li>
                                    <h5>Company Info</h5>
                                </li>
                                <li>About Us</li>
                                <li>Carrier</li>
                                <li>We are hiring</li>
                                <li>Blog</li>
                            </div>
                     
                                <div className="links">
                                    <li>
                                        <h5>Legal</h5>
                                    </li>
                                    <li>About Us</li>
                                    <li>Carrier</li>
                                    <li>We are hiring</li>
                                    <li>Blog</li>
                               </div>
                               <div className="links">
                                    <li>
                                        <h5>Features</h5>
                                    </li>
                                    <li>Business Marketing</li>
                                    <li>User Analytic</li>
                                    <li>Live Chat</li>
                                    <li>Unlimited Support</li>
                                </div>
                     </div>
                            
                      <div className="d-flex footer__link">
                           <div className="links">
                                <li>
                                    <h5>Resources</h5>
                                </li>
                                <li>IOS and Android</li>
                                <li>Watch a Demo</li>
                                <li>Customers</li>
                                <li>API</li>
                            </div>
                            <div className="links">
                                <li>
                                    <h5>Get In Touch</h5>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <input type="text" placeholder="Enter your Email"/>
                                        <button className="btn btn-primary">Subscribe</button>
                                    </div>
                                </li>
                                <li>Watch a Demo</li>
                                <li>Customers</li>
                                <li>API</li>
                           </div>
                            </div>
                            
                    </ul>
                    </div>
                    <p className="text-white ms-5 mt-5">Made With Love By Figmaland All Right Reserved </p>
                 </div>
            </div>
        </div>
    }
}

export default Footer;