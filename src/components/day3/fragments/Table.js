import React from 'react'
import Columns from './Columns';
import Row from './Row';

function Table() {
    return (
        <table>
            <tbody>

                <Row name={'Thor'} />
                <Row name={'Antman'} />

            </tbody>
        </table>
    )
}

export default Table
