import { Component } from 'react'
import { ContactListItem } from "components/ContactListItem/ContactListItem"

export class ContactList extends Component {
    render() {
        return (
            <>
            <ul>
            {this.props.contacts.map((contact) => {
                const name = contact.name.toLowerCase();
                const number = contact.number;
                const filter = this.props.filter.toLowerCase();
                if (name.includes(filter) || number.includes(filter))
                    return <ContactListItem key={contact.id} contact={contact}/>
                else 
                    return null;
            })}
            </ul>
            </>
        );
    }
}
