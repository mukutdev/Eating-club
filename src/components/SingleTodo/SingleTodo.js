import React from 'react';
import './SingleTodo.css'
const SingleTodo = ({todo}) => {
    const {image , name, description , age , time} = todo
    console.log(name);
    return (
        <div className='todo-card'>
            <div className="todo-img">
                <img src={image} alt="" />
            </div>
            <div className="todo-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>For Age : {age}</h4>
                <h4>Time required : {time} min</h4>
            </div>
            <div className="todo-btn">
                <button className='btn'>Add To List</button>
            </div>
        </div>
    );
};

export default SingleTodo;