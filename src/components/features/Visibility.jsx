{
  /** Visibility Index */
}

import useCurrentWeather from '../../hooks/useCurrentWeather';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Visibility = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center content-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return <p>Error loading weather data. Please try again later.</p>;
  }

  if (!currentWeather) {
    return null;
  }

  const { visibility } = currentWeather;

  return (
    <Card className="col-span-1">
      <CardHeader title="visibility" />
      <p className="text-4xl pt-2 grow">{visibility} km</p>
      <p className="text-xs">Light haze is affecting visibility.</p>
    </Card>
  );
};
export default Visibility;
