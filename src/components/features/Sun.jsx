import CardHeader from '../ui/CardHeader';
import Card from '../ui/Card';

import useCurrentWeather from '../../hooks/useCurrentWeather';

import { formatUnixToTime } from '../../utils/formatUnixToTime';
import { TiInfo } from 'react-icons/ti';

{
  /** Sunrise/Sunset */
}

const Sun = () => {
  const { data, ...rest } = useCurrentWeather();

  return (
    <Card className="col-span-1">
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-between">
          <CardHeader title="sunrise" />
        </div>

        <p className="text-3xl pt-2 grow">
          7:33<span className="text-base">AM</span>
        </p>
        <p className="text-xs">Sunset:5:17 PM</p>
      </div>
    </Card>
  );
};
export default Sun;
