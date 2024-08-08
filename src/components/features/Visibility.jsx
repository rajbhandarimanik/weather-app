{
  /** Visibility Index */
}

import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Visibility = () => {
  return (
    <Card className="col-span-1 h-36">
      <CardHeader title="visibility" />
      <p className="text-4xl pt-2 grow">7 km</p>
      <p className="text-xs">Light haze is affecting visibility.</p>
    </Card>
  );
};
export default Visibility;
