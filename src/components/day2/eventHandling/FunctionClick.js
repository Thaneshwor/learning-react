import React, { Component } from 'react';

function FuctionClick() {

    function clickHandler() {
        console.log('button clicked');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuctionClick;