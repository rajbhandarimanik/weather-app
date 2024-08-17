import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = '3d4034bdb6abc1f6f797d2a8238e0c63'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchWeatherData = async (lat, lon) => {
  const response = axios.get(BASE_URL, {
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
  });
};
