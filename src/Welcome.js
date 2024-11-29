import TodoList from './TodoList';
import React from 'react';
function Welcome() {
    return (
        <div>
            {/* <div><h1>Welcome to React Tutorial {props.name}!</h1>;</div> */}
            <div><h1>Welcome to React Tutorial Bob</h1></div>
            <div><TodoList/></div>
        </div>
    ) 
}

export default Welcome;
