import './App.css';
import {useWeatherData}  from './hooks/useWeatherData'
import {SingleDayComponent} from "./components/SingleDayComponent";


function App() {
  const data = useWeatherData("San Jose")
  return (

    <div className="App">
      {data.length > 0 && <SingleDayComponent data={data[0]}/>}
    </div>
  );
}

export default App;
