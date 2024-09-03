import { useCurrentWeatherData } from '../api/api';

const useCurrentWeather = () => {
  const lat = -37.8136;
  const lon = 144.9631;

  const { data, isLoading, isError, error } = useCurrentWeatherData(lat, lon);

  if (isLoading) {
    return { data: null, isLoading: true };
  }

  if (isError) {
    console.error('Error fetching weather data:', error);
    return { data: null, isError: true };
  }

  if (data) {
    let currentWeather = {
      city: data.name,
      temp: data.main.temp,
      weather: data.weather.description,
      low: data.main.temp_min.toFixed(0),
      high: data.main.temp_max.toFixed(0),
      humidity: data.main.humidity,
      windSpeed: (data.wind.speed * 3.6).toFixed(0),
      windDeg: data.wind.deg,
      visibility: data.visibility / 1000,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };

    return { data: currentWeather };
  }

  return { data, ...rest };
};
export default useCurrentWeather;
