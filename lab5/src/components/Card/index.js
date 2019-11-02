import React from "react";
import "./index.css";


class Card extends React.Component {

    render(){

        return (
        <div className="card">
            <span className="close"
            onClick={this.props.clickremove}
            datatitle={this.props.title}>&times;</span>
            <h1>{this.props.title}</h1>
            <h3>{this.props.content}</h3>
        </div>
        );
    }

}


export default Card;