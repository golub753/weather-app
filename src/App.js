import FormWeather from "./components/FormWeather";
import WeatherList from "./components/WeatherList";

const App = () => {
  const data = [
    {
      id: 1,
      city: 'Minsk',
      country: 'BY',
      degree: '9',
      weather: 'clear sky',
      icon: 'Sunny'
    },
    {
      id: 2,
      city: 'Paris',
      country: 'FR',
      degree: '15',
      weather: 'light snow',
      icon: 'Light-Snow'
    },
    {
      id: 3,
      city: 'Barcelona',
      country: 'ES',
      degree: '23',
      weather: 'cloudy',
      icon: 'Partly-Cloudy'
    },
    {
      id: 4,
      city: 'Gomel',
      country: 'BY',
      degree: '11',
      weather: 'Light intensity drizzle',
      icon: 'Light-Rain'
    },
  ]
  return (
    <div className="App">
      <FormWeather />
      <WeatherList data={data}/>
    </div>
  );
}

export default App;
