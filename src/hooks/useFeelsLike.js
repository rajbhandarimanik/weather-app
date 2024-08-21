import { useWeatherData } from '../api/api';

const useFeelsLike = () => {
  const lat = -37.8136;
  const lon = 144.9631;

  const { data, ...rest } = useWeatherData(lat, lon);

  //console.log(data);

  if (data) {
    let feelsLike = data.data?.list[0].main.feels_like;
    return { data: feelsLike, ...rest };
  }

  return { data, ...rest };
};
export default useFeelsLike;
