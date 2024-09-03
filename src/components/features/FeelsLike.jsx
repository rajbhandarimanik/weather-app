{
  /**Feels like */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

import useFeelsLike from '../../hooks/useFeelsLike';

const FeelsLike = () => {
  const { data } = useFeelsLike();

  return (
    <Card className="col-span-1">
      <CardHeader title="feels like"></CardHeader>
      <p className="text-3xl pt-2 grow">{data}º</p>
      <p className="text-xs opacity-60">Wind is making it feel cooler.</p>
    </Card>
  );
};
export default FeelsLike;
