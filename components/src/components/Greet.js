import React from 'react';


// Functional Component
// function Greet() {
//     return <h1>Hello, Amol!!</h1>;
// }

// Default export example
// const Greet = () => {
//     return(
//         <h1>Hello, Amol!!</h1>
//     );
// }


// Named export example
// export const Greet = (props) => {
//     console.log(props);
//     return(
//         <div>
//             <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     );
// }

// Destructuring props and state - Method 1
// export const Greet = ({name, heroName}) => {
//     return(
//         <div>
//             <h1>Hello, {name} a.k.a {heroName}</h1>
//             {/* {children} */}
//         </div>
//     );
// }

// Destructuring props and state - Method 2
export const Greet = (props) => {
    const { name, heroName } = props
    return(
        <div>
            <h1>Hello, {name} a.k.a {heroName}</h1>
            {/* {children} */}
        </div>
    );
}
// export default Greet;