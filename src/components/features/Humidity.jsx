import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

{
  /** Humidity Index */
}

const Humidity = () => {
  return (
    <Card className="col-span-1 card h-36">
      <CardHeader title="humidity" />
      <p className="text-4xl pt-2 grow">91%</p>
      <p className="text-xs">The dew point is 8º right now.</p>
    </Card>
  );
};
export default Humidity;
