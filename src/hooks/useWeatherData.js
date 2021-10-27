import React from 'react'
import axios from "axios";

export const useWeatherData = (city) => {

    const weather = async () => {



        let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2a23152aca4c1c4bf50bf677554dedf4`)

        const data = res.data


        const fiveDayArr = data.list.filter((_, index) => index %8 ===0 ).map(day => {
            const min = day.main.temp_min;
            const max = day.main.temp_max
            const iconId = day.weather[0].icon;
            const dayName = new Date(day.dt_txt).toLocaleDateString(undefined, {weekday: 'short'})

            return{min, max, iconId, dayName}
        })

        return fiveDayArr
    }
    return weather();
}