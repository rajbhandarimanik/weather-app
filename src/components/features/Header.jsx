import { useEffect, useState } from 'react';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import { LayoutGroup, motion } from 'framer-motion';

const Header = ({}) => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();
  const loading = true;

  if (isLoading) {
    return (
      <section className="container mx-auto flex justify-center py-8">
        <div className="w-fit text-center space-y-0">
          <div className="animate-pulse">
            <h1 className="bg-gray-500/30 rounded h-4 w-32 mb-2"></h1>
            <h3 className="bg-gray-500/30 rounded h-2 w-16 mx-auto mb-1"></h3>
          </div>

          <div className="lds-ripple ">
            <div></div>
            <div></div>
          </div>

          <div className="animate-pulse">
            <h2 className="bg-gray-500/30 rounded h-3 w-24 mx-auto mb-1"></h2>
            <p className="bg-gray-500/30 rounded h-2 w-16 mx-auto"></p>
          </div>
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
        initial={{ opacity: 0 }}
        animate={{
          //x: isExpanded ? -200 : 0, // Move left by 200px when expanded
          //opacity: isExpanded ? 0 : 1, // Reduce opacity
          opacity: 1,
          transition: { duration: 1 },
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
