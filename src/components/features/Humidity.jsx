import { useContext } from 'react';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';
import { LocationContext } from '../../context/LocationContext';

{
  /** Humidity Index */
}

const Humidity = () => {
  const location = useContext(LocationContext);
  const {
    data: currentWeather,
    isLoading,
    isError,
  } = useCurrentWeather(location);

  if (isLoading) {
    return (
      <Card className="col-span-1">
        <CardHeader title="humidity" />
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
    return (
      <Card className="col-span-1">
        <CardHeader title="humidity" />
        <div className="h-full flex flex-col justify-center content-center items-center">
          <p>Error Ocurred</p>
        </div>
      </Card>
    );
  }

  if (!currentWeather) {
    return null;
  }

  // Destructuring currentWeather object
  const { humidity } = currentWeather;

  return (
    <Card className="col-span-1">
      <CardHeader title="humidity" />
      <p className="text-3xl pt-2 grow">{humidity}%</p>
      <p className="text-xs opacity-60">The dew point is 8º right now.</p>
    </Card>
  );
};
export default Humidity;
