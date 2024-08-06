{
  /** Sunrise/Sunset */
}

import { WiSunrise, WiSunset } from 'react-icons/wi';

const Sun = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <WiSunrise />
          <p className="text-xs uppercase font-bold text-nowrap ">Sunrise</p>
        </div>
        <p className="text-4xl pt-2 grow">
          7:33<span className="text-base">AM</span>
        </p>
        <p className="text-xs">Sunset:5:17 PM</p>
      </div>
    </div>
  );
};
export default Sun;
