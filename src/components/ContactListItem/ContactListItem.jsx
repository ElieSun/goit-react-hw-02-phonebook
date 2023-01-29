import { Component } from 'react'
import PropTypes from 'prop-types';

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

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired
};
