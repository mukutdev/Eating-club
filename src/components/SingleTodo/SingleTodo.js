import React from 'react';
import './SingleTodo.css'
const SingleTodo = ({todo , handleClick}) => {
    const {image , name, description , age , time} = todo
    // console.log(name);
    // console.log(handleClick);
    return (
        <div className='food-card'>
            <div className="food-img">
                <img src={image} alt="" />
            </div>
            <div className="food-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>For Age : {age}</h4>
                <h4>Time required : {time} min</h4>
            </div>
            <div className="todo-btn">
                <button onClick={()=>handleClick(todo)} className='btn'>Add To List</button>
            </div>
        </div>
    );
};

export default SingleTodo;