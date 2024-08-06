{
  /** Visibility Index */
}
import { TiEye } from 'react-icons/ti';

const Visibility = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col ">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <TiEye />
          <p className="text-xs uppercase font-bold text-nowrap ">visibility</p>
        </div>
        <p className="text-4xl pt-2 grow">7 km</p>
        <p className="text-xs">Light haze is affecting visibility.</p>
      </div>
    </div>
  );
};
export default Visibility;
