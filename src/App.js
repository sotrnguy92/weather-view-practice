import './App.css';
import {useWeatherData} from "./hooks/useWeatherData";
import {FiveDayComponent} from "./components/FiveDayComponent";

function App() {
  const data = useWeatherData("San Jose");
  return (

    <div className="App">
      <FiveDayComponent fiveDayData={data}/>
    </div>
  );
}

export default App;
