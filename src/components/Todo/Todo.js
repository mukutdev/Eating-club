import React, { useEffect, useState } from 'react';
import './Todo.css'
import SingleTodo from '../SingleTodo/SingleTodo';
import logo from '../../burger.png'
import TodoStats from '../TodoStats/TodoStats';
const Todo = () => {

    const [todos, setTodo] = useState([])

    useEffect(() =>{

            fetch('data.json')
            .then(res => res.json())
            .then(data => setTodo(data))

    }, [])

    const handleAddToList = (todos) =>{
        console.log(todos);
    }

    return (
        <div className='todo-container'>
             <div className="todo-information">
                   <div className="logo-wrapper">
                    <img src={logo} alt="" />
                    <h1>EATING CLUB</h1>    
                   </div>
                    <h2>Select Favourtite Items</h2>
                    <div className='todo-wrapper'>
                            {
                                todos.map((todo) => <SingleTodo
                                
                                key={todo.id}
                                todo={todo} 
                                handleClick ={handleAddToList}                               
                                >
                                </SingleTodo> )
                            }
                    </div>
             </div>
              <div className="todo-stats">
                  <TodoStats></TodoStats>
              </div>
        </div>
    );
};

export default Todo;