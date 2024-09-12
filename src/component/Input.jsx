import React from "react";
import {useWeather} from "../context/Weather"

const Input = () => {

    const  weather = useWeather();

    return (
        <input
            className="input-field"
            placeholder="Search City"
            value={weather.city}
            onChange={(e)=>weather.setCity(e.target.value)}
        />
    )
}

export default Input;