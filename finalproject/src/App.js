import React from 'react';
import './App.css';
import Contacts from "./components/contacts/index";
import AddContact from "./components/addContact/index";
import Profile from "./components/profile/index";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      profile: [],
      removed: []
    }
  }
  componentDidMount() {
    fetch("https://apiexample.website/contacts", {
      "method": "GET",
      "headers": {
        "api": "vargas"
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.contacts })
      });
    this.displayProfile();
  }

  refreshContacts = () => {

    fetch("https://apiexample.website/contacts", {
      "method": "GET",
      "headers": {
        "api": "vargas"
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.contacts })
      })
      .catch(console.log)
  }

  componentDidUpdate() {
    this.refreshContacts();
    this.displayProfile();
  }

  displayProfile = () => {
    fetch("https://apiexample.website/profile", {
      "method": "GET",
      "headers": {
        "api": "vargas"
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ profile: data })
      })
      .catch(console.log)
  }


  personAdd = (event) => {

    event.preventDefault();

    const name = document.getElementById("addName").value;
    const number = document.getElementById("addNumber").value;

    fetch("https://apiexample.website/contacts/add", {
      method: "POST",
      headers: {
        api: "vargas",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        number: number
      })
    })
      .then(this.refreshContacts())
      .catch(console.log)
  }

 personRemove = (person) => {
    fetch("https://apiexample.website/contacts/remove", {
      method: "POST",
      headers: {
        api: "vargas",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        position: person
      })
    })
      .then(this.refreshContacts())
      .catch(console.log)
    }

  render() {

    return (
      <div class="main-grid">
        <section>
          <Profile profile={this.state.profile} />
        </section>
        <section>
          <Contacts contacts={this.state.contacts} />
          </section>
        <section>
          <AddContact Add={this.personAdd} />
        </section >
      </div>
    );
  }
}

export default App;
