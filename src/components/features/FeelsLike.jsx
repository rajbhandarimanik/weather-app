{
  /**Feels like */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const FeelsLike = () => {
  return (
    <Card className="col-span-1 card h-36">
      <CardHeader title="feels like"></CardHeader>
      <p className="text-4xl pt-2 grow">7º</p>
      <p className="text-xs">Wind is making it feel cooler.</p>
    </Card>
  );
};
export default FeelsLike;
