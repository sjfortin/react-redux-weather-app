import axios from 'axios';

const API_Key = 'bcbb2e1504fc00d416b5c04b80f54e83';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
