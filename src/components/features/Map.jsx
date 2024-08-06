{
  /** Precipitation Map */
}
import { WiUmbrella } from 'react-icons/wi';
import map from '../../assets/map.png';

const Map = () => {
  return (
    <div className="col-span-2  row-span-2  card">
      <div className=" w-full h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <WiUmbrella />
          <p className="text-xs uppercase font-bold text-nowrap ">
            precipitation
          </p>
        </div>
        <div className="grow mt-2 rounded-lg border border-slate-500 truncate">
          <img src={map} alt="" className="object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default Map;
