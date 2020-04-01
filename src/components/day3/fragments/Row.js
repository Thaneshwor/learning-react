import React from 'react'
import Columns from './Columns';

function Row(props) {
    return (

        < tr >
            <Columns name={props.name} />
        </tr >
    )
}


export default Row;