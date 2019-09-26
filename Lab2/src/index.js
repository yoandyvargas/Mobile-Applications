import Card from "../components/Card/index.js";
import Element from "./Element.js";

let card = new Card({content: "I'm going to understand this eventually"});

let element = new Element("div");

element.render(card.render());