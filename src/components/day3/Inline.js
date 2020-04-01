import React from 'react'
import { red } from 'color-name';

function Inline() {

    const heading = {
        fontSize: '75px',
        color: 'red'
    }

    return (
        <div>
            <h1 style={heading}>Heading</h1>
        </div>
    )
}

export default Inline
