import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLoginCheck = this.handleLoginCheck.bind(this);
        this.handleLogoutCheck = this.handleLogoutCheck.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginCheck() {
        this.setState({
            isLoggedIn: false
        })
    }

    handleLogoutCheck() {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginCheck} />
        } else {
            button = <LogoutButton onClick={this.handleLogoutCheck} />
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}

export default LoginController;