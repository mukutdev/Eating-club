import React, { useEffect, useState } from 'react';
import './TodoStats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import Person from '../../person.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import  {addToLocal, clearLocalStorage, getLocalStorage } from '../../utilities/localStorage';



const TodoStats = ({times}) => {
    
    let istimateTime = 0

    for(const time of times) {
        istimateTime = istimateTime + time.time
    }

    const [breakTime , setBreakTime] = useState(0)

    const handleBreakTime = (value)=>{
        setBreakTime(value)
        addToLocal(value)
    }
    useEffect(()=>{
       const getLocal = getLocalStorage()
       setBreakTime(getLocal)
    },[])

    const activityDone =()=> {
        toast("Activity completed");
        setBreakTime(0)
        clearLocalStorage()
        console.log(times);
        istimateTime = 0
    }
    return (
        <div className='todos-wrapper'>
            <div className="person-info">
                <img src={Person} alt="" />
                 <h3>Andrew Walker</h3>
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
                <button onClick={()=> handleBreakTime(10)}>10m</button>
                <button onClick={()=> handleBreakTime(20)}>20m</button>
                <button onClick={()=> handleBreakTime(30)}>30m</button>
                <button onClick={()=> handleBreakTime(40)}>40m</button>
                <button onClick={()=> handleBreakTime(50)}>50m</button>
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
                    <p>{breakTime ? breakTime : 0} min</p>
                </div>
             </div>
             <div className="activity-done">
                <button onClick={activityDone}>Activity Completed</button>
                <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                
                />
             </div>
        </div>
    );
};

export default TodoStats;