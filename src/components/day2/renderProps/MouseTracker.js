//a render prop is a function prop that a component uses to know what to render.

import React, { Component } from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

class MouseTracker extends Component {


    render() {
        return (
            <div>
                <h2>Move a mouse around</h2>
                <Mouse render={(mouse) => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

export default MouseTracker;