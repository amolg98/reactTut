import React from 'react'
import Person from './Person';

function NameList() {
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Brume',
    //         age: 30,
    //         skill: 'React',
    //     },
    //     {
    //         id: 2,
    //         name: 'Salori',
    //         age: 29,
    //         skill: 'Angular',
    //     },
    //     {
    //         id: 3,
    //         name: 'Tingo',
    //         age: 28,
    //         skill: 'Vue',
    //     },
    // ]
    const names = ['Brume', 'Salori', 'Tingo'];
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

    // const personList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {/* <div>{personList}</div> */}
            <div>{nameList}</div>
        </div>
    )
}

export default NameList;

