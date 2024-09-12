import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {

    const weather = useWeather();

    return (
        <div className="card-container">
            {/* eslint-disable-next-line */}
            <img src={weather.data?.current?.condition?.icon}/>
            <h2>{weather.data?.current?.temp_c} C</h2>
            <h5>{weather.data?.location.name}, {weather.data?.location.region}</h5>
        </div>
    )
}

export default Card;