import TodoList from './TodoList';
import Partone from './components/Partone';
import React from 'react';
function Welcome() {
    return (
        <div>
            {/* <div><h1>Welcome to React Tutorial {props.name}!</h1>;</div> */}
            <div><h1>Welcome to React Tutorial Bob</h1></div>
            <div><TodoList/></div>
            <div>
                <Partone/>
                <Partone/>
                <Partone/>
            
            </div>
        </div>
    ) 
}

export default Welcome;
