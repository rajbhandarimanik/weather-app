{
  /** Pressure */
}
import { WiBarometer } from 'react-icons/wi';

const Pressure = () => {
  return (
    <div className="col-span-1 card h-36">
      <div className="w-full h-full flex flex-col justify-center content-center items-center ">
        <div className="w-full flex flex-row gap-1 text-neutral-600  ">
          <WiBarometer />
          <p className="text-xs uppercase font-bold text-nowrap ">pressure</p>
        </div>
        <div className="fixed flex justify-center grow items-center mt-8">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_951)">
              <rect x="98" y="57" width="16" height="4" rx="2" fill="#D9D9D9" />
              <path
                d="M23.5 85.9994C17.5419 78.244 14 68.5356 14 58C14 32.5949 34.5949 12 60 12C85.4051 12 106 32.5949 106 58C106 68.5356 102.458 78.244 96.5 85.9994"
                stroke="#BBBABE"
                stroke-opacity="0.24"
                stroke-width="8"
                stroke-dasharray="2 2"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_951">
                <rect width="120" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="grow flex flex-col basis-1/2 justify-center content-center text-center">
          <span className="text-3xl">=</span>
          <span className="text-xl font-semibold leading-4">1,018</span>
          <span className="text-xs ">hPa</span>
        </div>
        <div className="w-full flex flex-row text-nowrap justify-around text-xs">
          <p>Low</p>
          <p>High</p>
        </div>
      </div>
    </div>
  );
};
export default Pressure;
