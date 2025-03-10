<section
  className="container w-full mx-auto grid grid-flow-row-dense
      grid-cols-2 gap-1
        sm:grid-cols-2 md:w-10/12
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 xl:w-9/12
      2xl:grid-cols-6 2xl:w-7/12 
      sm:gap-3"
>
  {/* <div className="col-span-2 card">
          <div className="h-32">
            <span className="capitalize text-base font-semibold">
              rain stopping briefly
            </span>
            <p className="text-sm">
              Light rain is expected to stop in 5min and start again after 11min
              later.
            </p>
          </div>
        </div> */}

  {/** Wind Forecast this is the expanded version.*/}
  <div className="col-span-2 min-h-36 card ">
    <div className=" flex flex-col h-full">
      <div className="flex flex-row gap-1 text-neutral-600">
        <WiStrongWind />
        <p className="text-xs uppercase font-bold text-nowrap">wind</p>
      </div>
      <div className="flex flex-row grow gap-6 pt-2">
        <ul className="flex flex-col basis-1/2 justify-around text-sm divide-y divide-slate-700">
          <li className="flex  grow flex-row items-center gap-2	">
            <span className="text-3xl">14</span>
            <div className="flex flex-col">
              <span className=" text-gray-400 font-semibold uppercase text-xs ">
                km/h
              </span>
              <span className=" text-slate-100 font-semibold capitalize text-xs">
                wind
              </span>
            </div>
          </li>
          <li className="flex  grow flex-row items-center gap-2	">
            <span className="text-3xl">29</span>
            <div className="flex flex-col">
              <span className=" text-gray-400 font-semibold uppercase text-xs ">
                km/h
              </span>
              <span className=" text-slate-100 font-semibold capitalize text-xs">
                gusts
              </span>
            </div>
          </li>
        </ul>

        <div
          id="windCompass"
          className=" text-center grow flex justify-center pr-4"
        >
          <div className="flex flex-col basis-1/2 justify-center content-center z-10">
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
    </div>
  </div>

  {/** Moon index 2 col. expanded version */}
  <div className="col-span-2 card ">
    <div className="h-32 flex flex-col">
      <div className="flex flex-row gap-1 text-neutral-600  ">
        <WiMoonAltWaningCrescent2 />
        <p className="text-xs uppercase font-bold text-nowrap ">
          Waxing Crescent
        </p>
      </div>
      <div className="flex flex-row grow gap-2 pt-2">
        <ul className="flex flex-col grow justify-around text-sm divide-y divide-slate-700">
          <li className="flex  grow flex-row items-center	">
            <span className="grow">Illumination</span>
            <span className=" text-gray-400 font-semibold ">29%</span>
          </li>
          <li className="flex grow flex-row items-center	">
            <span className="grow">Moonrise</span>
            <span className=" text-gray-400 font-semibold ">11:00 AM</span>
          </li>
          <li className="flex grow flex-row items-center	">
            <span className="grow">Next Full Moon</span>
            <span className=" text-gray-400 font-semibold ">9 Days</span>
          </li>
        </ul>

        <div>
          <img src={moon} alt="moon image" />
        </div>
      </div>
    </div>
  </div>
</section>;
