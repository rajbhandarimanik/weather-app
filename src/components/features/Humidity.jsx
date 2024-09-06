import useCurrentWeather from '../../hooks/useCurrentWeather';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

{
  /** Humidity Index */
}

const Humidity = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

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

  // Destructuring currentWeather object
  const { humidity } = currentWeather;

  return (
    <Card className="col-span-1 card">
      <CardHeader title="humidity" />
      <p className="text-3xl pt-2 grow">{humidity}%</p>
      <p className="text-xs opacity-60">The dew point is 8º right now.</p>
    </Card>
  );
};
export default Humidity;
