import { useState } from "react";
import FormWeather from "./components/FormWeather";
import WeatherList from "./components/WeatherList";
import GetWeather from './API/GetWeather';
import { v4 } from "uuid";

const App = () => {
  const [dataWeather, setdataWeather] = useState([]);

  const getCity = (city) => {
    const response = GetWeather.getAll(city);
    response.then((data) => {
      const newWeather = {
        id: v4(),
        city: data.name,
        country: data.sys.country,
        degree: Math.floor(data.main.temp - 273.15),
        icon: data.weather[0].main,
        weather: data.weather[0].description
      }
      setdataWeather([...dataWeather, newWeather])})
    .catch(error=> console.log(error))
  }

  return (
    <div className="App">
      <FormWeather 
        getCity={getCity}
      />
      {(dataWeather.length !== 0)
        ? <WeatherList data={dataWeather}/>
        : <h1 style={{textAlign: 'center', color: '#294569'}}>No Data. Please, enter your city in input.</h1>
      }
    </div>
  );
}

export default App;
