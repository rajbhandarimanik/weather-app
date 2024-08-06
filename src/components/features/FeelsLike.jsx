{
  /**Feels like */
}
import { TiThermometer } from 'react-icons/ti';

const FeelsLike = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="h-full flex flex-col">
        <div className="flex flex-row gap-1 text-neutral-600  ">
          <TiThermometer />
          <p className="text-xs uppercase font-bold text-nowrap ">Feels Like</p>
        </div>
        <p className="text-4xl pt-2 grow">7º</p>
        <p className="text-xs">Wind is making it feel cooler.</p>
      </div>
    </div>
  );
};
export default FeelsLike;
