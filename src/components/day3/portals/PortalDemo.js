import React, { Component } from 'react'
import Modal from './Modal'

class PortalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { showModel: false }
    }

    handleShowMessageClick = () => {
        this.setState({ showModel: true })
        console.log(this.state.showModel)
    }

    handleCloseModal = () => {
        this.setState({ showModel: false })
        console.log(this.state.showModel)
    }

    render() {
        return (
            <div>
                <h1>My App</h1>
                <p>
                    This is an example of how you might use React.createPortal. I think
                    it is a pretty neat API that is yet another awesome escape hatch
                    that React provides for practical reasons. Sometimes you just need
                    to render something completely outside the React Tree.
                </p>

                <button onClick={this.handleShowMessageClick}>Show secret message </button>
                {
                    this.state.showModel ?
                        <Modal onClose={this.handleCloseModal} msg="This is the secret modal message!" /> : null
                }
            </div>
        )
    }
}

export default PortalDemo
