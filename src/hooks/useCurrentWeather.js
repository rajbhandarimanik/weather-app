import { useWeatherData } from '../api/api';

const useCurrentWeather = () => {
  const lat = -37.8136;
  const lon = 144.9631;

  const { data, error, isLoading, isError } = useWeatherData(lat, lon);

  if (isLoading) {
    return { data: null, isLoading: true };
  }

  if (isError) {
    console.error('Error fetching weather data:', error);
    return { data: null, isError: true };
  }

  if (data) {
    let currentWeather = {
      city: data.data.city.name,
      temp: data.data.list[0].main.temp,
      weather: data.data.list[0].weather[0].main,
      low: data.data.list[0].main.temp_min,
      high: data.data.list[0].main.temp_max.toFixed(0),
      humidity: data.data.list[0].main.humidity,
      wind_speed: (data.data.list[0].wind.speed * 3.6).toFixed(0),
      wind_deg: data.data.list[0].wind.deg,
      visibility: data.data.list[0].visibility / 1000,
      pressure: data.data.list[0].main.pressure,
    };

    console.log(currentWeather);

    return { data: currentWeather };
  }

  return { data, ...rest };
};
export default useCurrentWeather;
