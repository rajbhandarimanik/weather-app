{
  /** Daily Forecast list */
}

import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

import DynamicIcon from '../ui/DynamicIcon';

import useDailyForecast from '../../hooks/useDailyForecast';

const iconMap = {
  sunny: 'WiDaySunny',
  cloudy: 'WiCloudy',
  rainy: 'WiRain',
  thunderstorm: 'WiThunderstorm',
  windy: 'WiStrongWind',
  nightRain: 'WiNightAltRain',
};

const showLoading = () => {
  return (
    <Card className="col-span-2 row-span-3">
      <CardHeader title="daily forecast" />
      <div className="h-full flex flex-col justify-center content-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </Card>
  );
};

const showError = () => {
  return (
    <Card className="col-span-2 row-span-3">
      <CardHeader title="daily forecast" />
      <div className="h-full flex flex-col justify-center content-center items-center">
        <p>Error Occurred</p>
      </div>
    </Card>
  );
};

const DailyForecast = () => {
  const { data: listData, isLoading, isError } = useDailyForecast();

  const [maxTemp, setMaxTemp] = useState('273');
  const [minTemp, setMinTemp] = useState('273');
  const [widthRatio, setWidthRatio] = useState(10);

  useEffect(() => {
    if (isError || isLoading) {
      return;
    }

    const allTemps = listData?.flatMap((day) => [
      day.temperature.high,
      day.temperature.low,
    ]);
    const currentMaxTemp = Math.max(...allTemps);
    const currentMinTemp = Math.min(...allTemps);
    const tempDifference = currentMaxTemp - currentMinTemp;

    // Set max and min temperatures
    setMaxTemp(currentMaxTemp);
    setMinTemp(currentMinTemp);

    // Calculate and set width ratio
    if (tempDifference !== 0) {
      const ratio = 100 / tempDifference;
      setWidthRatio(ratio);
    } else {
      setWidthRatio(0); // Handle the case where all temperatures are the same
    }
  }, [isError, isLoading]);

  // Show loading state if data is still being fetched
  if (isLoading) {
    return showLoading();
  }

  // Show loading state if data is still being fetched
  if (isError) {
    return showError();
  }

  const listItems = listData?.map((day, index) => {
    return (
      <DayItems
        key={index}
        data={day}
        index={index}
        minTemp={minTemp}
        widthRatio={widthRatio}
      />
    );
  });

  return (
    <Card className="col-span-2 row-span-3">
      <CardHeader title="daily forecast" />
      <ul className="pt-4 h-full w-full grow flex flex-col divide-y  divide-gray-200/20 justify-between">
        {listItems}
      </ul>
    </Card>
  );
};
export default DailyForecast;

{
  /**Daily Item component. */
}

export const DayItems = ({ index, data: day, minTemp, widthRatio }) => {
  const { icon: iconCode } = day;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct icon URL
  return (
    <li className="flex grow flex-row justify-between items-center first:border-t first:border-gray-200/20">
      <span className="capitalize w-12 text-md">
        {index === 0 ? 'today' : day.day.toLowerCase().slice(0, 3)}
      </span>
      <div className="w-12 flex flex-col items-center">
        {/* <DynamicIcon iconName={iconMap[day.icon]} /> */}
        <img src={iconUrl} alt="Weather Icon" className="" />
      </div>
      <div className="flex flex-row gap-4 justify-around content-center">
        <span>{day.temperature.low}º</span>
        <SvgBar
          lowTemp={minTemp}
          minTemp={day.temperature.low}
          maxTemp={day.temperature.high}
          widthRatio={widthRatio}
        />
        <span>{day.temperature.high}º</span>
      </div>
    </li>
  );
};

{
  /**Svg Bar component. */
}

export const SvgBar = ({ lowTemp, minTemp, maxTemp, widthRatio }) => {
  const getStartingPosition = (low, min) => {
    const difference = min - low;
    let startPosition = Math.round(difference * widthRatio);
    return startPosition;
  };

  const getRectangleWidth = (low, high) => {
    if (widthRatio !== null) {
      const dayTempDifference = high - low;
      return Math.round(dayTempDifference * widthRatio);
    }
    return 0;
  };

  return (
    <span className="self-center">
      <svg
        width="100"
        height="4"
        viewBox="0 0 100 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_21_6)">
          <rect
            width="100"
            height="4"
            rx="2"
            fill="black"
            fill-opacity="0.24"
          />
        </g>
        <rect
          x={getStartingPosition(lowTemp, minTemp)}
          width={getRectangleWidth(minTemp, maxTemp)}
          height="4"
          rx="2"
          fill="url(#paint0_linear_21_6)"
        />
        <defs>
          <filter
            id="filter0_i_21_6"
            x="0"
            y="0"
            width="100"
            height="8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_21_6"
            />
          </filter>
          <linearGradient
            id="paint0_linear_21_6"
            x1="28"
            y1="2"
            x2="92"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1DF1FF" />
            <stop offset="1" stop-color="#D0B144" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};
