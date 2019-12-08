import React from 'react'
import "./index.css"

const Contacts = ({ contacts }) => {

    return (
        <div class="contacts">
            <center><h1 class="contactstitle">Contacts</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.number}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts;