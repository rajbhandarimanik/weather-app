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

const CardHeader = () => {
  return (
    <div className="flex flex-row gap-1 text-neutral-600 sticky top-0  ">
      <WiTime10 />
      <p className="text-xs uppercase font-bold text-nowrap ">
        Hourly Forecast
      </p>
    </div>
  );
};
export default CardHeader;
