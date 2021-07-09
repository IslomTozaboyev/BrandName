import React from 'react';
import './Card.css'
import photo from "./photo1.png";


class Card extends React.Component{
    constructor(props) {
        super();

        this.state = props;
    }
    render() {
        return <div className="container p-0">
            <div className="row">
               

                <div className="col-12 col-sm-12 col-md-12">
                <div className="cards shadow rounded overflow-hidden p-3 d-flex">
            <div>
                <img className="w-100 mb-3 mt-2" src={photo} alt="rasm" />
            </div>
               <div className="p-2">
                    <p className="m-0 card__text fw-bold fs-3 ms-3  text-white">{ this.state.title}</p>
                    <p className="m-0  ms-3  text-white">{ this.state.text}</p>
               </div>
               </div>
                </div>
                </div>
            </div>
        }
}

export default Card;