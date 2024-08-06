{
  /** Daily Forecast list */
}

import {
  WiTime10,
  WiNightAltRain,
  WiUmbrella,
  WiRaindrop,
  WiSunrise,
  WiHumidity,
  WiMoonAltWaningCrescent2,
  WiBarometer,
  WiStrongWind,
} from 'react-icons/wi';
import {
  TiCalendar,
  TiEye,
  TiAdjustBrightness,
  TiThermometer,
  TiChartLineOutline,
} from 'react-icons/ti';

const DailyForecast = () => {
  return (
    <div className="col-span-2 row-span-3 card">
      <div className=" flex h-full flex-col">
        <div className="flex flex-row gap-1 text-neutral-600 sticky top-0 ">
          <TiCalendar />
          <p className="text-xs uppercase font-bold text-nowrap ">
            Daily Forecast
          </p>
        </div>
        <ul className="pt-4 grow flex flex-col divide-y  divide-slate-700 justify-between">
          <li className="flex grow flex-row gap-4 items-center first:border-t first:border-slate-700">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12  flex flex-col items-center">
              <WiNightAltRain />
              <span className="text-xs">44%</span>
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center ">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center first:border-t first:border-slate-700">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12  flex flex-col items-center">
              <WiNightAltRain />
              <span className="text-xs">44%</span>
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
          <li className="flex grow flex-row gap-4 items-center">
            <span className="capitalize w-12">today</span>
            <div className="text-2xl w-12">
              <WiNightAltRain className="mx-auto" />
            </div>
            <div className="grow flex flex-row justify-between content-center">
              <span>7%</span>
              <span className="self-center">
                <svg
                  width="100"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_21_6)">
                    <rect
                      width="100"
                      height="4"
                      rx="2"
                      fill="black"
                      fill-opacity="0.24"
                    />
                  </g>
                  <rect
                    x="28"
                    width="64"
                    height="4"
                    rx="2"
                    fill="url(#paint0_linear_21_6)"
                  />
                  <defs>
                    <filter
                      id="filter0_i_21_6"
                      x="0"
                      y="0"
                      width="100"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_21_6"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_21_6"
                      x1="28"
                      y1="2"
                      x2="92"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1DF1FF" />
                      <stop offset="1" stop-color="#D0B144" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>12%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DailyForecast;
