import { Component } from "react";

export class Filter extends Component {
    
    handleChange = evt => {
        const {value} = evt.currentTarget;
        this.props.filterContact(value);
    };

    render() {
        return(
    <>
    <input
    type="text"
    name="filter"
    value={this.props.filter}
    onChange={this.handleChange}
    />
    </>
        )
    }
}
