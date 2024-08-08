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

const HourlyForecast = () => {
  return (
    <Card className="col-span-2 md:col-span-3 lg:col-span-4">
      <CardHeader title="hourly Forecast" />
      <ul className="flex flex-row grow gap-8 overflow-clip">
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
        <li className="flex flex-col pt-4 justify-between content-center text-center">
          <span className=" ">Now</span>
          <div className="text-4xl">
            <WiNightAltRain />
          </div>
          <span className="text-md ">10º</span>{' '}
        </li>
      </ul>
    </Card>
  );
};
export default HourlyForecast;
