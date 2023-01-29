import { Component } from "react";
import shortid from 'shortid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = evt => {
        const {name, value} = evt.currentTarget;
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }; 

    handleSubmit = evt => {
        evt.preventDefault();
        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number
        }
        this.props.formSubmitHandle(contact);

        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''});
    };

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}
                />
                </label>
                <br />
                <label>Contact Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                />
                </label>
                <button type="submit">
                    Add contact
                </button>
            </form>
            </>
        );
    }
}

ContactForm.propTypes = {
    formSubmitHandle: PropTypes.func.isRequired
};
