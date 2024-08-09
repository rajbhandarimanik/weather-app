{
  /** Average index temp */
}

import { TiChartLineOutline } from 'react-icons/ti';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Averages = () => {
  return (
    <Card className="col-span-1">
      <CardHeader title="averages" />
      <div className="grow flex flex-col">
        <span className="text-3xl">+2º</span>
        <span className="text-xs pr-4">above average daily high</span>
      </div>
      <div>
        <div className="flex flex-row text-xs">
          <span className="grow text-gray-400 font-semibold  ">Today</span>
          <span className=" font-semibold ">H:14º</span>
        </div>
        <div className="flex flex-row text-xs">
          <span className="grow text-gray-400 font-semibold  ">Average</span>
          <span className=" font-semibold ">H:14º</span>
        </div>
      </div>
    </Card>
  );
};
export default Averages;
