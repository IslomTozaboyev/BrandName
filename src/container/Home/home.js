import React from 'react';
import "../Home/home.css";

class Home extends React.Component {
    render() {
        return <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="home__title text-center mt-5 text-white">
                        <h1 className="fw-bold mt-5 mb-5 display-4">Creating a Beautifull <br /> $ Usefull Solutitons</h1>
                        <p className="mb-5">We know how large objects will act, but things on a <br /> small scale just do not act that way.</p>
                       
                        <div>
                            <button>Get Quote Now</button>
                            <button>Learn More</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;