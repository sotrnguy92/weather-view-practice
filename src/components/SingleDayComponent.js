import React from 'react';
import './styles/SingleDayComponent.css'

export const SingleDayComponent = () => {
    return(
        <div className="single-day">
            <p>Mon</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt={{/*description*/}}/>
            <div className="temp-group">
                <p>min</p>
                <p>max</p>
            </div>
        </div>
    )
}