import React from 'react';
import TopButtons from './componets/TopButtons';
import Inputs from './componets/Inputs';
import TimeAndLocation from './componets/TimeAndLocation';
import TemperatureAndDetails from './componets/TemperatureAndDetails';
import Forcast from './componets/Forcast';
import getFormattedWeatherData from './Services/WeatherServices';




const App = () => {


  const fetchWeather =async()=>{
    const data = await getFormattedWeatherData({q:"cairo"})
    console.log(data)
  }

  fetchWeather()


  return (
    <div className='mx-auto max-w-screen-2xl py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
    shadow-gray-400'>
      <TopButtons></TopButtons>
      <Inputs></Inputs>

      <TimeAndLocation></TimeAndLocation>
      <TemperatureAndDetails></TemperatureAndDetails>
      <Forcast title="hourly forcast"></Forcast>
      <Forcast title="daily forcast"></Forcast>
    </div>
  );
}

export default App;

