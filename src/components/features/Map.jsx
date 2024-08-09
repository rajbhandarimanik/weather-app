{
  /** Precipitation Map */
}
import map from '../../assets/map.png';

import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Map = () => {
  return (
    <Card className="col-span-2  row-span-2">
      <CardHeader title="precipitation map" />

      <div className="grow mt-2 rounded-lg border border-slate-500 truncate">
        <img src={map} alt="" className="object-cover h-full" />
      </div>
    </Card>
  );
};

export default Map;
