import React, { useEffect, useState } from 'react';
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import SingleTodo from '../SingleTodo/SingleTodo';
const Todo = () => {

    const [todos, setTodo] = useState([])

    useEffect(() =>{

            fetch('data.json')
            .then(res => res.json())
            .then(data => setTodo(data))

    }, [])

    return (
        <div className='todo-container'>
             <div className="logo">
                    <h1> <FontAwesomeIcon className='icon-dumb' icon={faDumbbell} /> Fitness Club</h1>

                    <div className='todo-wrapper'>
                            {
                                todos.map((todo) => <SingleTodo
                                
                                key={todo.id}
                                todo={todo}                                
                                >
                                </SingleTodo> )
                            }
                    </div>
             </div>
              <div className="todo-stats">
             <h2>world</h2>
              </div>
        </div>
    );
};

export default Todo;