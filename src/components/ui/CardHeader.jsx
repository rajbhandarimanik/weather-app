import { useDeferredValue, useEffect, useState } from 'react';
import DynamicIcon from './DynamicIcon';

const headersIcons = {
  'hourly forecast': 'WiTime10',
  'precipitation map': 'WiUmbrella',
  averages: 'TiChartLineOutline',
  'daily forecast': 'TiCalendar',
  'feels like': 'TiThermometer',
  humidity: 'WiHumidity',
  sunrise: 'WiSunrise',
  sunset: 'WiSunset',
  'uv index': 'TiAdjustBrightness',
  pressure: 'WiBarometer',
  moon: 'WiMoonAltWaningCrescent2',
  visibility: 'TiEye',
  wind: 'WiStrongWind',
  precipitation: 'WiRaindrop',
};

const CardHeader = (props) => {
  const { title, active } = props;
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (headersIcons[title]) {
      setIcon(headersIcons[title]);
    }
  }, [title]);

  return (
    <div className="flex flex-row gap-1 text-gray-200/30 top-0">
      <DynamicIcon iconName={icon} />
      <p className="text-xs uppercase font-bold text-nowrap ">{title}</p>
    </div>
  );
};
export default CardHeader;
