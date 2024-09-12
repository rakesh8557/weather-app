import './App.css';
import Card from './component/Card';
import Input from './component/Input';
import Button from './component/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';


function App() {
  const weather = useWeather(); 
  console.log(weather);

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
