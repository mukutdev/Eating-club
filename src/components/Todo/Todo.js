import React from 'react';
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Todo = () => {
        


    return (
        <div className='todo-container'>
             <div className="todo-list">
                    <h1> <FontAwesomeIcon className='icon-dumb' icon={faDumbbell} /> Fitness Club</h1>
             </div>
              <div className="todo-stats">
             <h2>world</h2>
              </div>
        </div>
    );
};

export default Todo;