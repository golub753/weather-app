import FormWeather from "./components/FormWeather";

const App = () => {
  const data = [
    {
      id: 1,
      city: 'Minsk',
      country: 'BY',
      degree: '9',
      weather: 'clear sky'
    },
    {
      id: 2,
      city: 'Paris',
      country: 'FR',
      degree: '15',
      weather: 'light snow'
    },
    {
      id: 3,
      city: 'Barcelona',
      country: 'ES',
      degree: '23',
      weather: 'cloudy'
    },
    {
      id: 4,
      city: 'Gomel',
      country: 'BY',
      degree: '11',
      weather: 'Light intensity drizzle'
    },
  ]
  return (
    <div className="App">
      <FormWeather />
    </div>
  );
}

export default App;
