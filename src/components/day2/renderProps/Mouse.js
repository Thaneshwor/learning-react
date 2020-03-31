import React, { Component } from 'react';
import { red } from 'color-name';
import Cat from './Cat';

class Mouse extends Component {
    constructor(props) {
        super(props);

        this.state = { x: 0, y: 0 };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {/* <p>The current mouse position is({this.state.x}, {this.state.y})</p> */}
                {/* <Cat mouse={this.state} /> */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;