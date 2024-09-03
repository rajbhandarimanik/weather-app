{
  /** Hourly Forecast list */
}
import {
  WiTime10,
  WiNightAltRain,
  WiUmbrella,
  WiRaindrop,
  WiSunrise,
  WiHumidity,
  WiMoonAltWaningCrescent2,
  WiBarometer,
  WiStrongWind,
} from 'react-icons/wi';

import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';
//import { cn } from '../utils/cn';

import { formatUnixToTime } from '../../utils/formatUnixToTime';

import useHourlyForecast from '../../hooks/useHourlyForecast';
import { useEffect, useState } from 'react';
import { list } from 'postcss';

const HourlyForecast = () => {
  const { data } = useHourlyForecast();

  const listItems = data?.map((item, index) => {
    const { dateTime, temp, icon: iconCode } = item;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct icon URL

    return (
      <li
        key={index}
        className="flex flex-col justify-between content-center text-center"
      >
        <span className="text-md md:text-sm text-nowrap opacity-60">
          {formatUnixToTime(dateTime)}
        </span>
        <div className="w-8">
          {/* <WiNightAltRain /> */}
          <img src={iconUrl} alt="Weather Icon" />
        </div>
        <span className="text-lg sm:text-md ">{Math.round(temp)}º</span>{' '}
      </li>
    );
  });

  return (
    <Card className="col-span-2 md:col-span-3 lg:col-span-4">
      <CardHeader title="hourly Forecast" />
      <ul className="flex flex-row grow gap-6 overflow-x-auto scrollbar-thin scrollbar-webkit py-2">
        {listItems}
      </ul>
    </Card>
  );
};
export default HourlyForecast;
