import { useWeatherData } from '../api/api';

const useHourlyForecast = () => {
  const lat = -37.8136;
  const lon = 144.9631;

  const { data, ...rest } = useWeatherData(lat, lon);

  if (data) {
    const hourlyDataArray = data.data?.list;

    let modifiedData = hourlyDataArray.map((element, index, array) => {
      const item = element;

      return {
        dateTime: item.dt,
        temp: item.main.temp,
        icon: item.weather[0].icon, // weather is an array, so we need to access the first element
      };
    }, 8);

    return { data: modifiedData };
  }

  return { data, ...rest };
};
export default useHourlyForecast;
