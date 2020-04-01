import React from 'react';
import Person from './Person'

function NameList() {
    const names = ['Super Man', 'Spider Man', 'Bat Man', 'Ant Man', 'X-man', 'X-man'];
    const persons = [
        {
            id: 1,
            name: 'Super Man',
            age: 32,
            skils: 'Angular'
        },
        {
            id: 2,
            name: 'Bat Man',
            age: 52,
            skils: 'Vue'
        },
        {
            id: 3,
            name: 'Ant Man',
            age: 52,
            skils: 'React'
        },
        {
            id: 4,
            name: 'Iron Man',
            age: 62,
            skils: 'Java'
        }
    ];
    const personsList = persons.map((person) => { return <Person key={person.id} person={person} /> });
    const nameList = names.map((name, index) => { return <h2 key={index}>{index} {name} </h2> });
    return (
        <div>
            {nameList}
        </div>
    );
}

export default NameList;