import React from "react";
import "./index.css";
import Weather from "../weather/index.js";


class Card extends React.Component {

    render(){

        return (
        <div className="card">
            <Weather />
        </div>
        );
    }

}


export default Card;