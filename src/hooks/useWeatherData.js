import {useState, useEffect} from 'react';
import axios from 'axios';


export const useWeatherData =  (city) => {
    const [weatherArr, setWeatherArr] = useState([]);
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Imperial&appid=bff35e06736b740c8bdf19dc5115cbcf`;
    useEffect(() => {
        const weatherData = async () =>{
            const res = await axios.get(url)

            const data = res.data

           const fiveDayWeather = data.list.filter((_,index) => index%8 === 0).map(day => {
               const min = parseInt(day.main.temp_min);
               const max = parseInt(day.main.temp_max);
               const iconData = {iconImageId: day.weather[0].icon, iconDescription: day.weather[0].description}
               const dayName = new Date(day.dt_txt).toLocaleDateString(undefined, {weekday: "short"});
               return {min, max, iconData, dayName}
           })
            setWeatherArr(fiveDayWeather)
        }
        weatherData()
    }, [url])
    return weatherArr;
}