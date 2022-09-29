import React, { useEffect, useState } from 'react';
import './Todo.css'
import SingleTodo from '../SingleTodo/SingleTodo';
import logo from '../../burger.png'
import TodoStats from '../TodoStats/TodoStats';
import Question from '../Question/Question';
const Todo = () => {

    const [todos, setTodo] = useState([])
    const [time , setTime] =useState([])

    useEffect(() =>{

            fetch('data.json')
            .then(res => res.json())
            .then(data => setTodo(data))

    }, [])

    const handleAddToList = (todos) =>{
        const newTime = [...time,todos]
        setTime(newTime)
    }

    return (
        <div className='todo-container'>
             <div className="todo-information">
                   <div className="logo-wrapper">
                    <img src={logo} alt="" />
                    <h1>EATING CLUB</h1>    
                   </div>
                    <h2 className='select-items'>Select Favourtite Items</h2>
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

                    <div>
                    <Question></Question>
                    </div>
             </div>
              <div className="todo-stats">
                  <TodoStats times={time}></TodoStats>
              </div>
        </div>
    );
};

export default Todo;