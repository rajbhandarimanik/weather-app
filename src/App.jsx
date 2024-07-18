import './App.css';
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

import map from './assets/map.png';
import moon from './assets/moon.png';

function App() {
  return (
    <div className="min-h-dvh min-w-full bg-gradient-to-b from-blue-950 to-purple-950 text-white pb-8">
      <section className="container mx-auto flex justify-center  py-8">
        <div className="w-fit text-center">
          <h1 className="text-3xl">My Location</h1>
          <h3 className="uppercase font-bold text-xs">Murrumbeena</h3>
          <span className="text-6xl font-thin">11º</span>
          <h2 className="text-lg text-semibold">Partly Cloudly</h2>
          <p className="text-lg text-semibold">L:2º H:16º</p>
        </div>
      </section>

      <section className="container px-4 mx-auto xl:w-9/12 2xl:w-7/12 ">
        <ul
          className="grid grid-cols-2 grid-rows-4 auto-rows-fr gap-3 grid-flow-row-dense
        sm:grid-cols-2 
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6"
        >
          {/** Hourly Forecast list */}
          <li className="col-span-2 md:col-span-3 lg:col-span-4 card">
            <div className=" flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600 sticky top-0  ">
                <WiTime10 />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  Hourly Forecast
                </p>
              </div>
              <ul className="flex flex-row grow gap-8 overflow-clip">
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
                <li className="flex flex-col pt-4 justify-between content-center text-center">
                  <span className=" ">Now</span>
                  <div className="text-4xl">
                    <WiNightAltRain />
                  </div>
                  <span className="text-md ">10º</span>{' '}
                </li>
              </ul>
            </div>
          </li>
          {/** Precipitation Map */}
          <li className="col-span-2  row-span-2  card">
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
          </li>
          {/** Daily Forecast list */}
          <li className="col-span-2 row-span-3 card">
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
          </li>
          {/** Sunrise/Sunset */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <WiSunrise />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  Sunrise
                </p>
              </div>
              <p className="text-4xl pt-2 grow">
                7:33<span className="text-base">AM</span>
              </p>
              <p className="text-xs">Sunset:5:17 PM</p>
            </div>
          </li>
          {/** UV Index */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <TiAdjustBrightness />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  uv index
                </p>
              </div>
              <div className="grow pt-2">
                <p className="text-4xl">0</p>
                <p className="text-md capitalize">low</p>
              </div>
              <p className="text-xs">Low levels all day.</p>
            </div>
          </li>

          {/** Wind Speed and Direction */}
          <li className="col-span-1 card h-36">
            <div className=" flex flex-col h-full">
              <div className="flex flex-row gap-1 text-neutral-600">
                <WiStrongWind />
                <p className="text-xs uppercase font-bold text-nowrap">wind</p>
              </div>
              <div className="grow flex justify-center content-center mt-1">
                <div className="flex flex-col justify-center content-center z-10">
                  <span className="text-base leading-3">15</span>
                  <span className="text-xs ">km/h</span>
                </div>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#8C88A2"
                    stroke-opacity="0.24"
                    stroke-width="8"
                    stroke-dasharray="1 1"
                  />
                  <path
                    d="M47.0664 7.67383C46.9082 7.67383 46.79 7.63379 46.7119 7.55371C46.6357 7.47559 46.5977 7.38281 46.5977 7.27539C46.5977 7.18164 46.624 7.08887 46.6768 6.99707L49.4365 2.20996C49.4775 2.13965 49.5332 2.08594 49.6035 2.04883C49.6758 2.00977 49.7529 1.99023 49.835 1.99023C49.917 1.99023 49.9932 2.00977 50.0635 2.04883C50.1357 2.08594 50.1924 2.13965 50.2334 2.20996L52.9961 6.99707C53.0469 7.08887 53.0723 7.18164 53.0723 7.27539C53.0723 7.38281 53.0332 7.47559 52.9551 7.55371C52.8789 7.63379 52.7617 7.67383 52.6035 7.67383H47.0664Z"
                    fill="#A9AABA"
                  />
                  <path
                    d="M46.043 18V9.54492H47.3555L51.8906 15.9023L50.8477 15.3691H51.6035V9.54492H53.0566V18H51.75L47.2148 11.6367L48.2578 12.1699H47.502V18H46.043Z"
                    fill="#AAAABA"
                  />
                  <path
                    d="M11.7832 55L9.51562 46.5449H11.0859L12.5391 52.8906H12.6211L14.291 46.5449H15.6328L17.3203 52.8906H17.4023L18.8496 46.5449H20.4082L18.1465 55H16.7285L15.0059 48.9473H14.918L13.207 55H11.7832Z"
                    fill="#AAAABA"
                  />
                  <path
                    d="M84.043 54V45.5449H89.5156V46.8164H85.5547V49.1074H89.2988V50.3086H85.5547V52.7285H89.5156V54H84.043Z"
                    fill="#AAAABA"
                  />
                  <path
                    d="M49.9785 90.2109C49.3223 90.2109 48.752 90.1094 48.2676 89.9062C47.7871 89.7031 47.4082 89.4199 47.1309 89.0566C46.8535 88.6934 46.6973 88.2695 46.6621 87.7852L46.6562 87.7031H48.1211L48.127 87.7617C48.1504 88 48.2441 88.207 48.4082 88.3828C48.5762 88.5586 48.7988 88.6973 49.0762 88.7988C49.3535 88.8965 49.6699 88.9453 50.0254 88.9453C50.3652 88.9453 50.666 88.8926 50.9277 88.7871C51.1895 88.6816 51.3945 88.5371 51.543 88.3535C51.6914 88.166 51.7656 87.9512 51.7656 87.709V87.7031C51.7656 87.3984 51.6465 87.1504 51.4082 86.959C51.1699 86.7637 50.7773 86.6074 50.2305 86.4902L49.3223 86.3027C48.4551 86.1191 47.8242 85.8262 47.4297 85.4238C47.0391 85.0176 46.8438 84.5 46.8438 83.8711V83.8652C46.8438 83.3613 46.9766 82.9199 47.2422 82.541C47.5117 82.1621 47.8809 81.8672 48.3496 81.6562C48.8223 81.4414 49.3633 81.334 49.9727 81.334C50.5977 81.334 51.1387 81.4395 51.5957 81.6504C52.0527 81.8574 52.4121 82.1406 52.6738 82.5C52.9355 82.8594 53.082 83.2656 53.1133 83.7188L53.1191 83.7949H51.6777L51.666 83.7246C51.6309 83.502 51.5391 83.3086 51.3906 83.1445C51.2461 82.9766 51.0527 82.8438 50.8105 82.7461C50.5684 82.6484 50.2852 82.5996 49.9609 82.5996C49.6523 82.5996 49.377 82.6484 49.1348 82.7461C48.8926 82.8398 48.7012 82.9727 48.5605 83.1445C48.4238 83.3164 48.3555 83.5234 48.3555 83.7656V83.7715C48.3555 84.0684 48.4707 84.3145 48.7012 84.5098C48.9355 84.7051 49.3164 84.8574 49.8438 84.9668L50.752 85.1602C51.3457 85.2852 51.8281 85.4512 52.1992 85.6582C52.5703 85.8652 52.8418 86.123 53.0137 86.4316C53.1895 86.7363 53.2773 87.1035 53.2773 87.5332V87.5391C53.2773 88.0859 53.1426 88.5586 52.873 88.957C52.6074 89.3555 52.2266 89.6641 51.7305 89.8828C51.2383 90.1016 50.6543 90.2109 49.9785 90.2109Z"
                    fill="#AAAABA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 50L9.80392 55.7735L8.33333 51H92.2301C92.5834 52.839 94.172 54.2265 96.0784 54.2265C98.2443 54.2265 100 52.4356 100 50.2265C100 48.0174 98.2443 46.2265 96.0784 46.2265C94.3321 46.2265 92.8523 47.3909 92.3447 49H8.33333L9.80392 44.2265L0 50ZM94.1176 50.2265C94.1176 49.1219 94.9955 48.2265 96.0784 48.2265C97.1613 48.2265 98.0392 49.1219 98.0392 50.2265C98.0392 51.3311 97.1613 52.2265 96.0784 52.2265C94.9955 52.2265 94.1176 51.3311 94.1176 50.2265Z"
                    fill="white"
                  />
                  <circle cx="50" cy="50" r="24" fill="#434464" />
                </svg>
              </div>
            </div>
          </li>

          <li className="col-span-1 card h-36">
            <div className="w-full h-full flex flex-col justify-center content-center items-center ">
              <div className="w-full flex flex-row gap-1 text-neutral-600  ">
                <WiBarometer />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  pressure
                </p>
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
                    <rect
                      x="98"
                      y="57"
                      width="16"
                      height="4"
                      rx="2"
                      fill="#D9D9D9"
                    />
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
          </li>
          <li className="col-span-1 card h-36">
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
          </li>
          {/** Humidity Index */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <WiHumidity />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  Humidity
                </p>
              </div>
              <p className="text-4xl pt-2 grow">91%</p>
              <p className="text-xs">The dew point is 8º right now.</p>
            </div>
          </li>
          {/**Feels like */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <TiThermometer />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  Feels Like
                </p>
              </div>
              <p className="text-4xl pt-2 grow">7º</p>
              <p className="text-xs">Wind is making it feel cooler.</p>
            </div>
          </li>

          {/** Visibility Index */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col ">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <TiEye />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  visibility
                </p>
              </div>
              <p className="text-4xl pt-2 grow">7 km</p>
              <p className="text-xs">Light haze is affecting visibility.</p>
            </div>
          </li>
          {/** Moon Index */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <WiMoonAltWaningCrescent2 />
                <p className="text-xs uppercase font-bold text-nowrap ">Moon</p>
              </div>
              <div className="grow flex justify-center content-center mt-1">
                <img src={moon} alt="moon image" />
              </div>
            </div>
          </li>
          {/** Average index temp */}
          <li className="col-span-1 card h-36">
            <div className="h-full flex flex-col">
              <div className="flex flex-row gap-1 text-neutral-600  ">
                <TiChartLineOutline />
                <p className="text-xs uppercase font-bold text-nowrap ">
                  averages
                </p>
              </div>
              <div className="grow flex flex-col">
                <span className="text-3xl">+2º</span>
                <span className="text-xs pr-4">above average daily high</span>
              </div>
              <div>
                <div className="flex flex-row text-xs">
                  <span className="grow text-gray-400 font-semibold  ">
                    Today
                  </span>
                  <span className=" font-semibold ">H:14º</span>
                </div>
                <div className="flex flex-row text-xs">
                  <span className="grow text-gray-400 font-semibold  ">
                    Average
                  </span>
                  <span className=" font-semibold ">H:14º</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
