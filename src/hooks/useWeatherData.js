import React from 'react';
import axios from 'axios';


const weatherData = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2a23152aca4c1c4bf50bf677554dedf4`

    const res = await axios.get(url)
    const data = res.data

    const fiveDayArr = data.list.filter((_,index) => index%8 ===0).map(day => {
        const min = day.main.temp_min;
        const max = day.main.temp_max;
        const dayName = new Date(day.dt_txt).toLocaleDateString(undefined, {weekday: 'short'})
        const icon = {description: day.weather.description, iconId: day.weather.icon}

        return {min, max, dayName, icon}
    })

    return fiveDayArr;

};

export {weatherData}

