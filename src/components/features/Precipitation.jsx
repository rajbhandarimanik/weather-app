{
  /** Precipitation */
}
import { WiRaindrop } from 'react-icons/wi';

const Precipitation = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <WiRaindrop />
          <p className="text-xs uppercase font-bold text-nowrap ">
            precipitation
          </p>
        </div>
        <div className="grow pt-2">
          <p className="text-3xl">3 mm</p>
          <p className="text-sm">in last 6h</p>
        </div>
        <p className="text-xs">3 mm expected in next 24h.</p>
      </div>
    </div>
  );
};
export default Precipitation;
