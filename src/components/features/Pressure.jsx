{
  /** Pressure */
}
import useCurrentWeather from '../../hooks/useCurrentWeather';
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';

const Pressure = () => {
  const { data: currentWeather, isLoading, isError } = useCurrentWeather();

  const calculateRotationAngle = (pressure) => {
    const minPressure = 870;
    const maxPressure = 1084;
    const minAngle = 150; // Corresponds to 870 hPa
    const maxAngle = 390; // Corresponds to 1084 hPa
    const angleRange = 240;

    const ratio = (pressure - minPressure) / (maxPressure - minPressure);

    const angle = ratio * angleRange + minAngle;

    // Ensure the angle wraps around correctly (0 and 360 degrees are treated the same)
    return angle < 360 ? angle : angle - 360;
  };

  if (isLoading) {
    return (
      <Card>
        <div className="h-full flex flex-col justify-center content-center items-center">
          <p>Loading...</p>
        </div>
      </Card>
    );
  }

  if (isError) {
    return <p>Error loading weather data. Please try again later.</p>;
  }

  if (!currentWeather) {
    return null;
  }

  // Destructuring currentWeather object
  const { pressure } = currentWeather;

  return (
    <Card className="col-span-1">
      <CardHeader title="pressure" />
      <div className="h-full flex flex-col justify-center content-center items-center">
        <div className="fixed flex justify-center grow items-center pt-4">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip0_9_951">
                <rect width="120" height="96" fill="white" />
              </clipPath>

              {/* <!-- Gradient definition for the fading effect --> */}
              <linearGradient
                id="fade-gradient"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: 'rgba(255, 255,255, 1)',
                    stopOpacity: 0.6,
                  }}
                />
                <stop
                  offset="50%"
                  style={{
                    stopColor: 'rgba(255, 255, 255, 0.5)',
                    stopOpacity: 0.6,
                  }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: 'rgba(0, 0, 0, 0)', stopOpacity: 0.6 }}
                />
              </linearGradient>
            </defs>

            <g clipPath="url(#clip0_9_951)">
              {/* <!-- Gradient shadow rectangle --> */}
              <rect
                x={98 + 6}
                y={57 - 6}
                width="12"
                height="16"
                rx="2"
                fill="url(#fade-gradient)"
                opacity="0.5"
                transform={`rotate(${calculateRotationAngle(pressure)} 60 60)`}
              />
              <rect
                x="98"
                y="57"
                width="16"
                height="4"
                rx="2"
                fill="#D9D9D9"
                transform={`rotate(${calculateRotationAngle(pressure)} 60 60)`}
              />
              <path
                d="M23.5 85.9994C17.5419 78.244 14 68.5356 14 58C14 32.5949 34.5949 12 60 12C85.4051 12 106 32.5949 106 58C106 68.5356 102.458 78.244 96.5 85.9994"
                stroke="#BBBABE"
                strokeOpacity="0.24"
                strokeWidth="8"
                strokeDasharray="2 2"
              />
            </g>
          </svg>
        </div>
        <div className="grow flex flex-col basis-1/2 justify-center content-center text-center">
          <span className="text-2xl">=</span>
          <span className="text-xl font-semibold leading-4">{pressure}</span>
          <span className="text-xs opacity-60 ">hPa</span>
        </div>
        <div className="w-full flex flex-row text-nowrap justify-around text-xs">
          <p>Low</p>
          <p>High</p>
        </div>
      </div>
    </Card>
  );
};
export default Pressure;
