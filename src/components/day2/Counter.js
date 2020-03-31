//1. Use of setState() to modify state
//2. If we try to modify state directly UI will not rerender
//3. Code has to be executed after the state has been updated? Place that code in the call
//     back function with in the second argument to the setState method.
//4. When we have to update state based on the previous state value, pass in a function 
//   as an argument instead of the regular object.

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
