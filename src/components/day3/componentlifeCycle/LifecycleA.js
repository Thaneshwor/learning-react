import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Thaneshwor'
        }
        console.log('LifecycleA Constructor')
    }

    changeState = () => {
        this.setState({
            name: 'Thanos'
        })
    }
    // function have access to props and state. Should return null or new state. 
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate   A')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate   A')
        return null;
    }

    componentDidUpdate() {
        console.log('Lifecycle componentDidUpdate A')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
