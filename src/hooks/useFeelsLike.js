import { useWeatherData } from '../api/api';

const useFeelsLike = ({ latitude, longitude }) => {
  const lat = latitude;
  const lon = longitude;

  const { data, ...rest } = useWeatherData(lat, lon);

  //console.log(data);

  if (data) {
    let feelsLike = data.data?.list[0].main.feels_like;
    return { data: feelsLike, ...rest };
  }

  return { data, ...rest };
};
export default useFeelsLike;
