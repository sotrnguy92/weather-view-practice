import './App.css';
import {useWeatherData} from "./hooks/useWeatherData";


function App() {
  const weatherData = useWeatherData('San Jose')
  console.log(weatherData)

  return (
    <div className="App">

    </div>
  );
}

export default App;
