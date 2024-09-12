import { createContext , useContext, useState} from "react";
import { getWeatherdataForCity, getWeatherdataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherdataForCity(city);
        setData(response);
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherdataForLocation(position.coords.latitude, position.coords.longitude).then(data=>setData(data));
        })
    }

    return (
        <WeatherContext.Provider value={{data, city, setCity, fetchData, fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}