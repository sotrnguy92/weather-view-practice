import './App.css';
import {useWeatherData} from "./hooks/useWeatherData";
import {SingleDayComponent} from "./components/SingleDayComponent";


function App() {
  const data = useWeatherData("San Jose");
  console.log("I am in APP", data)
  return (

    <div className="App">
      <SingleDayComponent data={data[0]}/>
    </div>
  );
}

export default App;
