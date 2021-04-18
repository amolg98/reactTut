import React from 'react'

// function Person(props) {
//     return (
//         <div>
//             <h2>
//                 I am {props.person.name}. I am {props.person.age} old. I know {props.person.skill}.
//             </h2>
//         </div>
//     )
// }

function Person({person}) {
    console.log(person)
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} old. I know {person.skill}.
            </h2>
        </div>
    )
}

export default Person
