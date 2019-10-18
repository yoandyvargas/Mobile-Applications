import React from "react";
import Card from "../Card/";
import data from "../../data.json";
//CardList does cards

class CardList extends React.Component {
    //Required for Javascript to enable use of this -- Let's Parent Element do its thing
    constructor(props) {
        super(props);

        //Update 
        this.state = {
            cards: data.cards
        };
    }


    remove = event => {
        let datatitle = event.target.getAttribute("datatitle");

        let localCards = this.state.cards;

        let changedCards = localCards.filter(card => {
            return card.title !== datatitle;
        });

        this.setState({ cards: changedCards });
    }

    render() {
        return (
            <div>
                {
                    this.state.cards.map((card, index) => {
                        return <Card
                            key={index}
                            title={card.title}
                            content={card.content}
                            dataclick={this.remove} />
                    })
                }
            </div>
        );
    }
}

// --- Assignment Requirements ---
// Dynamically Create each Card
// Pass a click listener function so that each card can remove themselves
// Use attributes to pass data to each Card -- key index
// import data.json and use the data

export default CardList;