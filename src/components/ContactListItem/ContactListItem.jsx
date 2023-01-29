import { Component } from 'react'

export class ContactListItem extends Component {
    render() {
        return (
            <>
                <li>
                    <span>{this.props.contact.name}: {this.props.contact.number} </span>
                    <button  type="button" onClick={this.props.deleteContact}>Delete</button>
                </li>
            </>
        );
    }

}
