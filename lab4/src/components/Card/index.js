import React from "react";
import "./index.css";


class Card extends React.Component {

    render(){

        return (
        <div className="card">
            <span className="close"
            onClick={this.props.dataclick}
            datatitle={this.props.title}>&times;</span>
        {this.props.content}</div>
        );
    }

}


export default Card;