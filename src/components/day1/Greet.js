// functional component

import React from 'react'

function Greet() {
    return <h1>Hello <Name /></h1>
}

const Name = () => {
    return 'Thaneshwor Joshi'
}

export default Greet;