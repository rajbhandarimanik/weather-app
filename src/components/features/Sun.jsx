import CardHeader from '../ui/CardHeader';
import Card from '../ui/Card';

{
  /** Sunrise/Sunset */
}

const Sun = () => {
  return (
    <Card className="col-span-1">
      <div className="h-full flex flex-col">
        <CardHeader title="sunrise" />
        <p className="text-4xl pt-2 grow">
          7:33<span className="text-base">AM</span>
        </p>
        <p className="text-xs">Sunset:5:17 PM</p>
      </div>
    </Card>
  );
};
export default Sun;
