import React from "react";
import Card from "../Card/";
import data from "../../data.json";
//CardList does cards

class CardList extends React.Component {
  //Required for Javascript to enable use of this -- Let's Parent Element do its thing
  constructor(props) {
    super(props);

    this.state = {
      cards: data.cards
    };
  }
}
// Dynamically Create each Card
// Pass a click listener function so that each card can remove themselves
// Use attributes to pass data to each Card -- key index
// import data.json and use the data

export default CardList;