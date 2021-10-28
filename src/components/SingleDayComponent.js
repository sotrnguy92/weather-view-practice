import React from 'react';
import './styles/singleDayComponent.css'

export const SingleDayComponent = ({data}) =>{
    console.log(typeof data.min)
    return(
        <div className="single-day">
            <p>{data.dayName}</p>
            <img src={`http://openweathermap.org/img/wn/${data.icon.iconId}@2x.png`} alt={data.icon.description}/>
            <div className="temp-group">
                <p className="max-temp">{data.max}&deg;</p>
                <p>{data.min}&deg;</p>
            </div>
        </div>
    )
}