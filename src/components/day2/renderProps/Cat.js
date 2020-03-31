import React, { Component } from 'react';
import CatImg from './../../../cat.png'
class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={CatImg} style={{ position: 'absolute', left: mouse.x - 90, top: mouse.y - 70 }} />
        );
    }
}

export default Cat;
