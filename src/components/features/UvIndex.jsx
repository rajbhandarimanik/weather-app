{
  /** UV Index */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const UvIndex = () => {
  return (
    <Card className="col-span-1 h-36">
      <CardHeader title="uv index" />
      <div className="grow pt-2">
        <p className="text-4xl">0</p>
        <p className="text-md capitalize">low</p>
      </div>
      <p className="text-xs">Low levels all day.</p>
    </Card>
  );
};
export default UvIndex;
