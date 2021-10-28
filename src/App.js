import './App.css';
import {useWeatherData} from "./hooks/useWeatherData";


function App() {
  const data = useWeatherData("San Jose");
  console.log("I am in APP", data)
  return (

    <div className="App">
    </div>
  );
}

export default App;
