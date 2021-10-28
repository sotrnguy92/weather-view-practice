import React from 'react';
import {SingleDayComponent} from "./SingleDayComponent";
import './styles/FiveDayComponent.css'

export const FiveDayComponent = ({fiveDayData}) => {
    return (
        <div className="five-day">
            {fiveDayData.map((day, index) => {
                return <SingleDayComponent
                    key={day.dayName}
                    data={day}
                    today = {index === 0? true: false}
                />
            })}
        </div>
    )
}