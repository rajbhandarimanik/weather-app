{
  /** Precipitation */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

import { TiInfo } from 'react-icons/ti';

const Precipitation = () => {
  return (
    <Card className="col-span-1">
      <div className="flex flex-row justify-between">
        <CardHeader title="precipitation" />
        <TiInfo className="text-yellow-500 " />
      </div>
      <div className="grow pt-2">
        <p className="text-3xl">3 mm</p>
        <p className="text-xs">in last 6h</p>
      </div>
      <p className="text-xs opacity-60">3 mm expected in next 24h.</p>
    </Card>
  );
};
export default Precipitation;
