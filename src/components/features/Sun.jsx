import CardHeader from '../ui/CardHeader';
import Card from '../ui/Card';
import SunPathChart from '../ui/SunPathChart';

import useCurrentWeather from '../../hooks/useCurrentWeather';

import { formatUnixToTime } from '../../utils/formatUnixToTime';
import { TiInfo } from 'react-icons/ti';
import unixToHour from '../../utils/unixToHour';
import { useEffect, useState } from 'react';

{
  /** Sunrise/Sunset */
}

const Sun = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();
  const [isDay, setIsDay] = useState(null);
  const [bigTime, setBigTime] = useState(null); // Time to display in large font
  const [smallTime, setSmallTime] = useState(null); // Time to display in small text
  const [smallText, setSmallText] = useState(''); // Text for small time (e.g., 'in X hours')

  useEffect(() => {
    if (!currentWeather) return;

    const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp (seconds)
    const { sunrise, sunset } = currentWeather;

    // Time calculations
    const timeUntilSunset = sunset - currentTime;
    const timeUntilNextSunrise = sunrise + 86400 - currentTime; // Next day's sunrise (add 24 hours)

    if (currentTime < sunrise) {
      // Before sunrise
      setIsDay(false);
      setBigTime(sunrise); // Show sunrise in large font
      setSmallTime(sunset); // Show sunset in small font
      setSmallText(`in ${Math.floor((sunset - currentTime) / 3600)} hours`); // Time until sunset
    } else if (currentTime >= sunrise && currentTime < sunset) {
      // Daytime (between sunrise and sunset)
      setIsDay(true);
      setBigTime(sunset); // Show sunset in large font
      setSmallTime(sunset); // Small text is sunset time
      setSmallText(`in ${Math.floor(timeUntilSunset / 3600)} hours`); // Time until sunset
    } else {
      // After sunset (nighttime)
      setIsDay(false);
      setBigTime(sunrise + 86400); // Show next day's sunrise
      setSmallText('Sunset passed'); // Show sunset has passed
    }
  }, [currentWeather]);

  if (isLoading) {
    return (
      <Card>
        <div className="h-full flex flex-col justify-center content-center items-center">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </Card>
    );
  }

  if (isError) {
    return <p>Error loading weather data. Please try again later.</p>;
  }

  const { sunrise, sunset } = currentWeather;

  return (
    <Card className="col-span-1">
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-between">
          <CardHeader title={isDay ? 'sunset' : 'sunrise'} />{' '}
          {/* Dynamic title */}
        </div>

        {/* Big time (sunrise or sunset depending on time of day) */}
        <p className="text-3xl pt-2 grow">
          {formatUnixToTime(bigTime).slice(0, -2)}
          {/* Show either sunrise or sunset */}
          <span className="text-base">{isDay ? 'PM' : 'AM'}</span>
        </p>

        {/* Small time (sunset with "in X hours" or "Sunset passed") */}
        <p className="text-xs">{smallText}</p>
      </div>
    </Card>
  );
};

export default Sun;
