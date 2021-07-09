import React from 'react';
import "../Header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



class Header extends React.Component{
    render() {
        return <div className="header__section">
            <div className="container">
                    <header className="w-100 d-flex justify-content-between align-items-center py-3">
                        <h2 className="text-white">BrandName</h2>
                        <div className="navigation__menu" id="navigation">
                            <a href="#">Home</a>
                            <a href="#">Product</a>
                            <a href="#">Pricing</a>
                            <a href="#">Contact</a> 
                        </div>
                        <div className="register">
                                <a className="text-primary" href="#">Login</a>
                                <button className="btn btn-primary p-2">Become a member
                                    <FontAwesomeIcon className="ms-3" icon={ faArrowRight}/>
                                </button>
                        </div>
                <div className="mt-4 d-none bars__section">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="bars text-white">
                                    <FontAwesomeIcon className="ms-4" icon={ faSearch}/>
                                    <FontAwesomeIcon className="ms-4" icon={ faCartPlus}/>
                                    <span>  <FontAwesomeIcon className="ms-4" icon={ faBars}/></span>
                             </div>
                        </div>
                    </div>
                    </header>

                    
        </div>
        </div>
    }
}

export default Header;