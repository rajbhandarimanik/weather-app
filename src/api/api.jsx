import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const fetchCurrentWeather = async (lat, lon) => {
  const response = await axios.get(BASE_URL + 'weather', {
    params: {
      lat: lat,
      lon: lon,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

const fetchWeatherData = async (lat, lon) => {
  const response = await axios.get(BASE_URL + 'forecast', {
    params: {
      lat: lat,
      lon: lon,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response;
};

export const useWeatherData = (lat, lon) => {
  return useQuery({
    queryKey: ['weatherData', lat, lon],
    queryFn: () => fetchWeatherData(lat, lon),
    staleTime: 10 * 1000,
  });
};

export const useCurrentWeatherData = (lat, lon) => {
  return useQuery({
    queryKey: ['currentWeatherData', lat, lon],
    queryFn: () => fetchCurrentWeather(lat, lon),
    staleTime: 10 * 1000,
  });
};
