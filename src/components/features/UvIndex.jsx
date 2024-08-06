{
  /** UV Index */
}
import { TiAdjustBrightness } from 'react-icons/ti';

const UvIndex = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <TiAdjustBrightness />
          <p className="text-xs uppercase font-bold text-nowrap ">uv index</p>
        </div>
        <div className="grow pt-2">
          <p className="text-4xl">0</p>
          <p className="text-md capitalize">low</p>
        </div>
        <p className="text-xs">Low levels all day.</p>
      </div>
    </div>
  );
};
export default UvIndex;
