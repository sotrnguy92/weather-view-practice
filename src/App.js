import './App.css';
import {weatherData}  from './hooks/useWeatherData'


function App() {
  const data = weatherData("San Jose")
  console.log(data)

  return (

    <div className="App">

    </div>
  );
}

export default App;
