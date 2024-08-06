{
  /** Moon Index */
}
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi';

import moon from '../../assets/moon.png';

const Moon = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <WiMoonAltWaningCrescent2 />
          <p className="text-xs uppercase font-bold text-nowrap ">Moon</p>
        </div>
        <div className="grow flex justify-center content-center mt-1">
          <img src={moon} alt="moon image" />
        </div>
      </div>
    </div>
  );
};
export default Moon;
