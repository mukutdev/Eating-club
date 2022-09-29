import React, { useEffect, useState } from 'react';
import SingleQues from '../SingleQues/SingleQues';
import './Question.css'
const Question = () => {

    const [ques , setQuestion] = useState([])

    useEffect(()=>{
        fetch('question.json')
        .then(res => res.json())
        .then(data => setQuestion(data))
    },[])

    return (
        <div className='ques-container'>
            <h1>Important question about react</h1>
            <div className='ques-wrapper'>
             {
                ques.map(que => <SingleQues
                key={que.id}
                ques ={que}
                ></SingleQues>)
             }
        </div>
        </div> 
    );
};

export default Question;