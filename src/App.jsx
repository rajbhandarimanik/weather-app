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

import { useWeatherData } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="min-h-dvh min-w-full bg-gradient-to-b from-blue-950 to-purple-950 text-white pb-8">
      <Header />

      <section className="container px-4 mx-auto xl:w-9/12 2xl:w-7/12 ">
        <div
          className="grid grid-cols-2 grid-rows-4 auto-rows-fr gap-3 grid-flow-row-dense
        sm:grid-cols-2 
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6"
        >
          <HourlyForecast />

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
    </div>
  );
}

export default App;
