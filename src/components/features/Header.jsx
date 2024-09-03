import { useEffect, useState } from 'react';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import { motion } from 'framer-motion';

const Header = ({ isExpanded }) => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

  if (isLoading) {
    return (
      <section className="container mx-auto flex justify-center py-8">
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
      <motion.div
        className="header-container"
        animate={{
          x: isExpanded ? -200 : 0, // Move left by 200px when expanded
          opacity: isExpanded ? 1 : 1, // Reduce opacity
          transition: { duration: 0.5 },
        }}
      >
        <div className="w-fit text-center">
          <h1 className="text-2xl">{city}</h1>
          <h3 className="uppercase font-bold text-xs">{city}</h3>
          <span className="text-6xl font-thin">{Math.floor(temp)}º</span>

          <h2 className="text-lg text-semibold leading-3">Partly Cloudy</h2>
          <p className="text-md text-semibold">{`L:${low}º H:${high}º`}</p>
        </div>
      </motion.div>
    </section>
  );
};
export default Header;
