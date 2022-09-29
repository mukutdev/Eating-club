import React from 'react';
import './SingleQues.css'
const singleQues = ({ques}) => {
    const {name , ans} = ques
    return (
        <div className='single-ques'>
            <h2>{name}</h2>
            <p>{ans}</p>
        </div>
    );
};

export default singleQues;