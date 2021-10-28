import {useState, useEffect} from 'react';
import axios from 'axios';


export const useWeatherData =  (city) => {
    const [data, setData] = useState([]);
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Imperial&appid=2a23152aca4c1c4bf50bf677554dedf4`;
    useEffect(() => {
        const weatherData = async () =>{
            const res = await axios.get(url)

            const data = res.data

            console.log(data)
            setData(data.list)
        }
        weatherData()
    }, [url])
    return data;
}