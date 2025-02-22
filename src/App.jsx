import './App.css';

import HourlyForecast from './components/features/HourlyForecast';
import DailyForecast from './components/features/DailyForecast';
import Pressure from './components/features/Pressure';
import Wind from './components/features/Wind';
import Sun from './components/features/Sun';
import Moon from './components/features/Moon';
import FeelsLike from './components/features/FeelsLike';
import UvIndex from './components/features/UvIndex';
import Humidity from './components/features/Humidity';
import Averages from './components/features/Averages';
import Precipitation from './components/features/Precipitation';
import Visibility from './components/features/Visibility';
import Map from './components/features/Map';
import Header from './components/features/Header';
import Canvas from './components/animation/Canvas';

import { useWeatherData } from './api/api';
import { createContext, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { TiInfo } from 'react-icons/ti';
import useLocation from './hooks/useLocation';
import { latLng } from 'leaflet';

import { LocationContext } from './context/LocationContext';

function App() {
  //const [isExpanded, setIsExpanded] = useState(false);

  const [latLon, setLatLon] = useState({ latitude: null, longitude: null });

  const { location, error } = useLocation();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setLatLon(location);
    }
  }, [location]);

  // return (
  //   <LocationContext.Provider value={latLon}>
  //     <div className="min-h-dvh min-w-full text-white pb-4">
  //       <Canvas /> {/* Render the Canvas component */}
  //     </div>
  //   </LocationContext.Provider>
  // );

  return (
    <LocationContext.Provider value={latLon}>
      <div className="min-h-dvh min-w-full text-white pb-4">
        <Canvas /> {/* Render the Canvas component */}
        {/* <Header isExpanded={isExpanded} /> */}
        <Header />
        <section className="container px-4 md:px-4 mx-auto xl:w-9/12 2xl:w-7/12 mt-12 md:mt-6 pt-4">
          <div
            className="grid grid-cols-2 grid-rows-4 auto-rows-fr gap-3 grid-flow-row-dense
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6"
          >
            <HourlyForecast />

            {/* <Map handleClick={handleClick} isExpanded={isExpanded} /> */}
            <Map />

            <DailyForecast />

            <Sun />

            <UvIndex />

            <Wind />

            <Pressure />

            <Precipitation />

            <Humidity />

            <FeelsLike />

            <Moon />

            <Visibility />

            <Averages />
          </div>
        </section>
        <section className="container mx-auto flex gap-2 justify-center items-center mt-4">
          <TiInfo className="text-yellow-500"></TiInfo>
          <p className="text-sm italic"> Data available in next versions.</p>
        </section>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
