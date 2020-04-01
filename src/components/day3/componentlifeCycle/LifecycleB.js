import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Thaneshwor'
        }
        console.log('LifecycleB Constructor')
    }

    // function have access to props and state. Should return null or new state. 
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate   B')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate  B')
        return null;
    }

    componentDidUpdate() {
        console.log('Lifecycle componentDidUpdate B')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                B
            </div>
        )
    }
}

export default LifecycleB
