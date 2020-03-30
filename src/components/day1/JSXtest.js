import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Thaneshwor',
    lastName: 'Joshi'
};

const JSXtest = () => {
    return <h1> Hello {formatName(user)}</h1>;
}

export default JSXtest;