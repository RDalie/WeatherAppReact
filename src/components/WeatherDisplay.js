import axios from "axios";
import { React, useEffect, useState } from "react";
import Card from "./UI/Card";
import classes from './WeatherDisplay.module.css'
const api = process.env.REACT_APP_WEATHER_KEY
const WeatherDisplay = (props) => {
  const [weatherInfo, setWeatherInfo] = useState("");
  const [location, setLocation] = useState(props.location);
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${props.location}` },
    headers: {
      "X-RapidAPI-Key": `${api}`,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeatherInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, [props.location]);

  return (

    <>
      {weatherInfo &&
       <div className={classes.body}>
        <Card>
            
        <div className="row justify-content-center text-white d-flex">
            {`${weatherInfo.location.name}, ${weatherInfo.location.region}, ${weatherInfo.location.country} `}
        </div>
        <div className="row justify-content-center text-white d-flex">
            {new Date(weatherInfo.location.localtime).toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit"})}
        </div>
        <div className="row justify-content-center text-white d-flex">
          <div className="col-md-3">
          <img className={classes['weather-icon']} src ={weatherInfo.current.condition.icon} alt="icon" />
          </div>
        </div>
        <div className="row justify-content-center text-white d-flex">
            Temperature: {weatherInfo.current.temp_c } °C
        </div>
        <div className="row justify-content-center text-white d-flex">
            Humidity: {weatherInfo.current.humidity}%


        </div>
        <div className="row justify-content-center text-white d-flex">
            Precipitation: {weatherInfo.current.precip_in} inches

        </div>
     </Card>  </div>}
     </>
    
  );
};

export default WeatherDisplay;
