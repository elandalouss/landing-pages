import "./WeatherApp.css";
import search_icon from "../../assets/search.png";
import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";
import humidity_icon from "../../assets/humidity.png";
import { useState } from "react";

const WeatherApp = () => {

    const API_key = "ba134ac868954f5f976bdbc6ab6385e1";
    const [weatherIcon, setWeatherIcon] = useState(clear_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") return 0;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${API_key}`
        const response = await fetch(url);
        const data = await response.json();

        const weatherTemp = document.getElementsByClassName("weather-temp");
        const weatherLocation = document.getElementsByClassName("weather-location");
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");

        weatherTemp[0].innerHTML = Math.floor(data.main.temp) + " °C";
        weatherLocation[0].innerHTML = data.name;
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " kh/h";
    
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
            setWeatherIcon(clear_icon);
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
            setWeatherIcon(cloud_icon);
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
            setWeatherIcon(drizzle_icon);
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
            setWeatherIcon(drizzle_icon);
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
            setWeatherIcon(rain_icon);
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
            setWeatherIcon(rain_icon);
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
            setWeatherIcon(snow_icon);
        else
            setWeatherIcon(clear_icon);
    }


  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div className="search-icon">
          <img onClick={() => {search()}} src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} alt="" />
      </div>
      <div className="weather-temp">24 °C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img className="icon" src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img className="icon" src={wind_icon} alt="" />
          <div className="data">
            <div className="wind-speed">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
