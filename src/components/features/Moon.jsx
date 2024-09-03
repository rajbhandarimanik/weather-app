{
  /** Moon Index */
}

import moon from '../../assets/moon.png';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

import { TiInfo } from 'react-icons/ti';

const Moon = () => {
  return (
    <Card className="col-span-1">
      <div className="flex flex-row justify-between">
        <CardHeader title="moon" />
        <TiInfo className="text-yellow-500 " />
      </div>
      <div className="grow flex justify-center content-center mt-1">
        <img src={moon} alt="moon image" className=" object-contain" />
      </div>
    </Card>
  );
};
export default Moon;
