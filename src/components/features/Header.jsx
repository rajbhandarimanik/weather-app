import { useEffect, useState } from 'react';
import useCurrentWeather from '../../hooks/useCurrentWeather';

const Header = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

  if (isLoading) {
    return (
      <section className="container mx-auto flex justify-center  py-8">
        <div className="w-fit text-center">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return <p>Error loading weather data. Please try again later.</p>;
  }

  if (!currentWeather) {
    return null;
  }

  // Destructuring currentWeather object
  const { city, temp, weather, low, high, humidity, wind_speed, visibility } =
    currentWeather;

  return (
    <section className="container mx-auto flex justify-center  py-8">
      <div className="w-fit text-center">
        <h1 className="text-3xl">{city}</h1>
        <h3 className="uppercase font-bold text-xs">{city}</h3>
        <span className="text-6xl font-thin">{Math.floor(temp)}º</span>
        <h2 className="text-lg text-semibold">Partly Cloudy</h2>
        <p className="text-lg text-semibold">{`L:${low}º H:${high}º`}</p>
      </div>
    </section>
  );
};
export default Header;
