import React from 'react';
import './styles/SingleDayComponent.css'

export const SingleDayComponent = ({data, today}) => {
    return(
        <div className={`single-day ${ today ? 'today' : ''}`}  >
            <p>{data.dayName}</p>
            <img src={`http://openweathermap.org/img/wn/${data.iconData.iconImageId}@2x.png`} alt={data.iconData.description}/>
            <div className="temp-group">
                <p>{data.max}&deg;F</p>
                <p>{data.min}&deg;F</p>
            </div>
        </div>
    )
}