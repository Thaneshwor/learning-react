import React, { Component } from 'react'

class HoverCounter extends Component {

    render() {

        const { count, incrementCount } = this.props;
        return (
            <h1 onMouseOver={incrementCount}>Hovered {count} time</h1>
        )
    }
}

export default HoverCounter
