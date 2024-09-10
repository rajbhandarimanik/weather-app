{
  /** Visibility Index */
}

import { useContext } from 'react';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';
import { LocationContext } from '../../context/LocationContext';

const Visibility = () => {
  const location = useContext(LocationContext);
  const {
    data: currentWeather,
    isLoading,
    isError,
  } = useCurrentWeather(location);

  if (isLoading) {
    return (
      <Card>
        <div className="h-full flex flex-col justify-center content-center items-center">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </Card>
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
      <p className="text-3xl mt-2 grow">{visibility} km</p>
      <p className="text-xs opacity-60">Light haze is affecting visibility.</p>
    </Card>
  );
};
export default Visibility;
