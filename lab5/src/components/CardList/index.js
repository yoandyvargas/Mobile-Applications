import React from "react";
import Card from "../Card/";
import data from "../../data.json";
import Weather from "../weather";

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: data.cards
        };
    }



    render() {
        return (
            <div>
                { 
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

export default CardList;