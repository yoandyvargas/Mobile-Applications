import React from "react";
import Card from "../Card/";
import data from "../../data.json";
import Weather from "../weather";
//CardList does cards

class CardList extends React.Component {
    //Required for Javascript to enable use of this -- Let's Parent Element do its thing
    constructor(props) {
        super(props);

        //Update and Passing data.json into cards?
        this.state = {
            cards: data.cards
        };
    }



    render() {
        return (
            <div>
                {   //Passing attributes into card with an arrow function?
                    this.state.cards.map((card, index) => {
                        return <Card
                            key={index}
                            />
                    })
                }
            </div>
        );
    }
}

// --- Assignment Requirements ---
// Dynamically Create each Card
// Use attributes to pass data to each Card -- key index
// import data.json and use the data

export default CardList;