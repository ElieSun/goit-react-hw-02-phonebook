import { Component } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "components/Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  formSubmitHandle = (contact) => {
    this.setState(({contacts}) => ({
      contacts: [...contacts, contact]
    }))
  }

  filterContact = (search) => {
    this.setState(({
      filter: search
    }))
  }


  render () {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          formSubmitHandle={this.formSubmitHandle}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterContact={this.filterContact}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter}/>
      </div>
    );
  }
  
}
