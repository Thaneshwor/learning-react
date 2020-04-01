import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: false,
            numberOfGuests: 3
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <br />
                <label>
                    Number of guests:
                    <input
                        name='numberOfGuests'
                        type='number'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Reservation;