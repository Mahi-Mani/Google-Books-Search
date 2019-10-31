import React from "react";
import Background from '../../images/bg.jpg';

function Jumbotron(props) {
    const Style = {
        jumbotron : {
            backgroundImage: `url(${Background})`
        }
    }
    return (
        <div className="jumbotron jumbotron-fluid shadow-lg bg-dark rounded img-responsive"style={Style.jumbotron}>
            <h1 className="display-4"> Google Book Search</h1>
            <p className="lead">Search Your Desired Book here !</p>
        </div>
    )
}

export default Jumbotron;