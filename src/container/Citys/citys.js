import React from 'react';
import './citys.css';
import Card from '../../components/Card/Card';
import photo from "../../components/Card/photo1.png";

const data = [
    {
        title:"Investment Trading",
        text:"the quick fox jumps over the lazy dog",
    },
    {
        title:"Raising Funds",
        text:"the quick fox jumps over the lazy dog",
    },
    {
        title:"Financial Analysis",
        text:"the quick fox jumps over the lazy dog",
    },
    {
        title:"Taxation Planning",
        text:"the quick fox jumps over the lazy dog",
    },
    {
        title:"Save money time",
        text:"the quick fox jumps over the lazy dog",
    },
    {
        title:"Outsource Consult ",
        text:"the quick fox jumps over the lazy dog",
    },
]

class Citys extends React.Component{
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <section className="citys">
           <div className="container py-5">
           <div className="">
                    <div className="text-white text-center mt-4">
                        <h1 className="mb-4 fw-bold">Better Strategy With <br /> Quality Business</h1>
                        <p className="mb-5 text-secondary">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                    data.map((city, index) => 
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={city.title }>
                            <Card  img={city.img}
                                    title={city.title}
                                    text={city.text}
                                />
                            </div>
                        )
                    }
                </div>
           </div>
        </section>
    }
}

export default Citys;
