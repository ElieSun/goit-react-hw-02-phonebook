import { Component } from 'react'

export class ContactListItem extends Component {
    render() {
        return (
            <>
                <li>{this.props.contact.name}: {this.props.contact.number}</li>
            </>
        );
    }

}
