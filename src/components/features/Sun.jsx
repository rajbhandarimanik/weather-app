import CardHeader from '../ui/CardHeader';
import Card from '../ui/Card';
import SunPathChart from '../ui/SunPathChart';

import useCurrentWeather from '../../hooks/useCurrentWeather';

import { formatUnixToTime } from '../../utils/formatUnixToTime';
import { TiInfo } from 'react-icons/ti';
import unixToHour from '../../utils/unixToHour';

{
  /** Sunrise/Sunset */
}

const Sun = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

  //const currentTime = unixToHour(Date.now()) * 3600; // 10 PM

  if (isLoading) {
    return (
      <Card>
        <div className="h-full flex flex-col justify-center content-center items-center">
          <p>Loading...</p>
        </div>
      </Card>
    );
  }

  if (isError) {
    return <p>Error loading weather data. Please try again later.</p>;
  }

  // const sunrise = unixToHour(currentWeather.sunrise) * 3600; // 6 AM
  // const sunset = unixToHour(currentWeather.sunset) * 3600; // 6 PM

  // console.log(sunrise);

  const { sunrise, sunset } = currentWeather;

  return (
    <Card className="col-span-1">
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-between">
          <CardHeader title="sunrise" />
        </div>

        <p className="text-3xl pt-2 grow">
          7:33<span className="text-base">AM</span>
        </p>

        {/* <SunPathChart
          sunrise={sunrise}
          sunset={sunset}
          currentTime={currentTime}
        /> */}

        <p className="text-xs">Sunset: {formatUnixToTime(sunset)}</p>
      </div>
    </Card>
  );
};
export default Sun;
