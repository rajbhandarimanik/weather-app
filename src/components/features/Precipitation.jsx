{
  /** Precipitation */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Precipitation = () => {
  return (
    <Card className="col-span-1">
      <CardHeader title="precipitation" />
      <div className="grow pt-2">
        <p className="text-3xl">3 mm</p>
        <p className="text-sm">in last 6h</p>
      </div>
      <p className="text-xs">3 mm expected in next 24h.</p>
    </Card>
  );
};
export default Precipitation;
