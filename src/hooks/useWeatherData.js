import {useEffect, useState} from 'react';
import axios from 'axios';




const useWeatherData =  (city) =>{
    const [data, setData] =useState([])
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2a23152aca4c1c4bf50bf677554dedf4`

    useEffect(() => {
        const getWeather = async () => {
            const res = await axios.get(url)
            const data = res.data
            console.log(data)

            const fiveDayArr = data.list.filter((_,index) => index%8 ===0).map(day => {
                const min = parseInt(day.main.temp_min);
                const max = parseInt(day.main.temp_max);
                const dayName = new Date(day.dt_txt).toLocaleDateString(undefined, {weekday: 'short'})
                const icon = {description: day.weather[0].description, iconId: day.weather[0].icon}

                return {min, max, dayName, icon}
            })

            setData(fiveDayArr)
        }
        getWeather();
    },[url])
    return data;
};

export {useWeatherData}

