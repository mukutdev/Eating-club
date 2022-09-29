import React, { useState } from 'react';
import './TodoStats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import Person from '../../person.jpg'
const TodoStats = ({times}) => {
    
    let istimateTime = 0

    for(const time of times) {
        istimateTime = istimateTime + time.time
    }

    const [breakTime , setBreakTime] = useState(0)

    const handleBreakTime = (value)=>{
        setBreakTime(value)
    }

    return (
        <div className='todos-wrapper'>
            <div className="person-info">
                <img src={Person} alt="" />
                 <h3>James Bond</h3>
                 <p>
                    <FontAwesomeIcon className='fa-Location' icon={faLocationPin}></FontAwesomeIcon>
                    <span>NewYork , USA</span>
                 </p>
            </div>
            <div className="physical-info">
                <div className="info-one">
                    <h4>85kg</h4>
                    <p>Weight</p>
                </div>
                <div className="info-two">
                     <h4>26</h4>
                    <p>Age</p>
                </div>
                <div className="info-three">
                    <h4>5.8</h4>
                    <p>Height</p>
                </div>
            </div>
             <div className="break-info">
                <h2>Add a Break</h2>
                <div className="break-btn">
                <button onClick={()=> handleBreakTime(10)}>10s</button>
                <button onClick={()=> handleBreakTime(20)}>20s</button>
                <button onClick={()=> handleBreakTime(30)}>30s</button>
                <button onClick={()=> handleBreakTime(40)}>40s</button>
                <button onClick={()=> handleBreakTime(50)}>50s</button>
                </div>
             </div>

             <div className="eating-details">
                <h2>Eating Time</h2>
                <div className="eating-time">
                    <h4>Eating Time</h4>
                    <p>{istimateTime} min</p>
                </div>
                <div className="break-time">
                    <h4>Break Time </h4>
                    <p>{breakTime} min</p>
                </div>
             </div>
             <div className="activity-done">
                <button>Activity Completed</button>
             </div>
        </div>
    );
};

export default TodoStats;