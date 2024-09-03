{
  /** UV Index */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

import { TiInfo } from 'react-icons/ti';

const UvIndex = () => {
  return (
    <Card className="col-span-1">
      <div className="flex flex-row justify-between">
        <CardHeader title="uvIndex" />
        <TiInfo className="text-yellow-500 " />
      </div>
      <div className="grow pt-2">
        <p className="text-3xl">0</p>
        <p className="text-sm capitalize">low</p>
      </div>
      <p className="text-xs">Low levels all day.</p>
    </Card>
  );
};
export default UvIndex;
