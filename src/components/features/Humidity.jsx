{
  /** Humidity Index */
}

import { WiHumidity } from 'react-icons/wi';

const Humidity = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <WiHumidity />
          <p className="text-xs uppercase font-bold text-nowrap ">Humidity</p>
        </div>
        <p className="text-4xl pt-2 grow">91%</p>
        <p className="text-xs">The dew point is 8º right now.</p>
      </div>
    </div>
  );
};
export default Humidity;
