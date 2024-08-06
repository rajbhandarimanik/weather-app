{
  /** Average index temp */
}

import { TiChartLineOutline } from 'react-icons/ti';

const Averages = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <TiChartLineOutline />
          <p className="text-xs uppercase font-bold text-nowrap ">averages</p>
        </div>
        <div className="grow flex flex-col">
          <span className="text-3xl">+2º</span>
          <span className="text-xs pr-4">above average daily high</span>
        </div>
        <div>
          <div className="flex flex-row text-xs">
            <span className="grow text-gray-400 font-semibold  ">Today</span>
            <span className=" font-semibold ">H:14º</span>
          </div>
          <div className="flex flex-row text-xs">
            <span className="grow text-gray-400 font-semibold  ">Average</span>
            <span className=" font-semibold ">H:14º</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Averages;
