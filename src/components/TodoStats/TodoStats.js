import React from 'react';
import './TodoStats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import Person from '../../person.jpg'
const TodoStats = () => {
    return (
        <div>
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
        </div>
    );
};

export default TodoStats;