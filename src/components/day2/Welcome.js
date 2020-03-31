// class components(stateful/smart/container)

import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state1: 100,
            state2: 200
        }

    }

    render() {
        const { state1, state2 } = this.state;
        const { name, heroName } = this.props;
        return < h1 >Welcome {name} state1</h1 >
    }
}

export default Welcome;
