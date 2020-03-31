// Use of setState() to modify state
// If we try to modify state directly UI will not rerender

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        // increment only once all increment() methods are called once

        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('call back value: ' + this.state.count) })
        // console.log(this.state.count)


        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count:- {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button >
            </div >
        )
    }
}

export default Counter
