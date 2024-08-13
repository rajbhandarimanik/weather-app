import { useState } from 'react';

const Header = () => {
  const [location, setLocation] = useState('Melbourne');

  return (
    <section className="container mx-auto flex justify-center  py-8">
      <div className="w-fit text-center">
        <h1 className="text-3xl">{location}</h1>
        <h3 className="uppercase font-bold text-xs">Murrumbeena</h3>
        <span className="text-6xl font-thin">11º</span>
        <h2 className="text-lg text-semibold">Partly Cloudy</h2>
        <p className="text-lg text-semibold">L:2º H:16º</p>
      </div>
    </section>
  );
};
export default Header;
