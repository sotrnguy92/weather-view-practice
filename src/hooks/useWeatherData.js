import {useState, useEffect} from 'react';
import axios from 'axios';


export const useWeatherData =  (city) => {
    const [weatherArr, setWeatherArr] = useState([]);
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Imperial&appid=2a23152aca4c1c4bf50bf677554dedf4`;
    useEffect(() => {
        const weatherData = async () =>{
            const res = await axios.get(url)

            const data = res.data
            console.log(data)

           const fiveDayWeather = data.list.filter((_,index) => index%8 === 0).map(day => {
               const min = day.main.temp_min;
               const max = day.main.temp_max;
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