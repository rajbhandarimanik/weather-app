{
  /** Moon Index */
}

import moon from '../../assets/moon.png';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Moon = () => {
  return (
    <Card className="col-span-1">
      <CardHeader title="moon" />
      <div className="grow flex justify-center content-center mt-1">
        <img src={moon} alt="moon image" />
      </div>
    </Card>
  );
};
export default Moon;
