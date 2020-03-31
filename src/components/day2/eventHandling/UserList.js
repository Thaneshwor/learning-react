import React from 'react';

function UserList() {
    let users = ['James', 'Nora', 'Matthwe', 'Joe', 'Susan'];

    function deleteUserWithName(name) {

    }

    return (
        <ul>
            {users.map(name => (
                <li>
                    <button onClick={() => deleteUserWithName(name)}>Delete {name}</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;