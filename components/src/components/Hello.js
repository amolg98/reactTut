import React from 'react';

const Hello = () => {
    // JSX method
    return(
        <div className='dummyClass'>
            <h1>Hello Amol!!</h1>
        </div>
    )

    // return React.createElement(
    //     'div', 
    //     {id: 'Hello', className: 'dummyClass'}, 
    //     React.createElement('h1', null, 'Hello Amol!!')
    // );
}

export default Hello;