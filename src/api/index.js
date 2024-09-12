const base_url = "https://api.weatherapi.com/v1/current.json?key=10edd19f15c14794b9762634241209";

export const getWeatherdataForCity = async (city) => {
    const response = await fetch(`${base_url}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherdataForLocation = async (lat, lon) => {
    const response = await fetch(`${base_url}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}