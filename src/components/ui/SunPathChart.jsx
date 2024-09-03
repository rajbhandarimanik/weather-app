import React from 'react';

const SunPathChart = ({ sunrise, sunset, currentTime }) => {
  // SVG viewBox width and corresponding total hours (24 hours)
  const svgWidth = 145;
  const svgHeight = 43;
  const totalHours = 24;

  const sunriseX = 20; // Sunrise at x = 20
  const sunsetX = 125; // Sunset at x = 125
  const baseY = 30; // Horizon line y-position
  const peakY = 10; // Peak of the sun's arc

  // Calculate the midpoint (noon) between sunrise and sunset
  const peakX = (sunriseX + sunsetX) / 2;

  // Generate the quadratic curve path using the coefficients
  // const curvePath = quadraticPath(a, b, c, sunriseX, sunsetX, 1);

  // Convert times (in seconds) to a percentage of the total day
  const timeToPercentage = (time) => (time / (totalHours * 3600)) * 100;

  // Calculate the position on the path based on time
  const sunrisePercentage = timeToPercentage(sunrise); // Sunrise percentage position
  const sunsetPercentage = timeToPercentage(sunset); // Sunset percentage position
  const currentTimePercentage = timeToPercentage(currentTime); // Current time position

  // Convert percentage to an x-position on the SVG path
  const timeToXPosition = (timePercentage) => (timePercentage / 100) * svgWidth;

  // Interpolating Y-Position based on time of day
  const interpolateYPosition = (time) => {
    const normalizedTime = (time - sunrise) / (sunset - sunrise);
    if (normalizedTime < 0 || normalizedTime > 1) {
      return 30; // Night: Below the baseline
    }
    // Interpolate Y position along a quadratic curve (y = ax^2 + bx + c)
    // You can adjust the curve as needed for the desired shape.
    const dayArcPeak = 10; // The highest point during the day
    const dayArcBase = 30; // The lowest point (sunrise/sunset on the horizon)

    // Use a quadratic curve to simulate the sun's arc: higher at noon, lower at sunrise/sunset
    return (
      dayArcBase -
      (dayArcBase - dayArcPeak) * (1 - 4 * (normalizedTime - 0.5) ** 2)
    );
  };

  // Calculate y-position for current time
  const sunYPosition = interpolateYPosition(currentTime);

  // Determine if it’s day or night based on current time and sunrise/sunset times
  const isDay = currentTime >= sunrise && currentTime <= sunset;

  // Set sun color: yellow during the day, gray during the night
  const sunColor = isDay ? 'white' : 'gray';

  return (
    <div>
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base line */}
        {/* <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M144.5 22H1V21H144.5V22Z"
          fill="white"
        /> */}

        {/* Base line (horizon line) */}
        {/* <path
          d={`M ${sunriseX} ${baseY} H ${sunsetX}`}
          stroke="white"
          strokeWidth="2"
        /> */}

        <line
          x1="0"
          y1={interpolateYPosition(sunrisePercentage)}
          x2={svgWidth}
          y2={interpolateYPosition(sunrisePercentage)}
          stroke="rgb(200 200 200 / 60%)"
          strokeWidth="1"
        />

        {/* Day/Night path
        <path
          d={curvePath}
          stroke="url(#paint0_linear_9_1072)"
          strokeWidth="4"
        /> */}

        {/* Sun circle */}
        <circle
          cx={timeToXPosition(currentTimePercentage)}
          cy={sunYPosition} // Place the sun above or below the line based on day/night
          r="4.75"
          fill={sunColor}
          stroke="white"
          strokeWidth="0.5"
        />

        <defs>
          {/* Gradient for day/night representation */}
          <linearGradient
            id="paint0_linear_9_1072"
            x1="0.5"
            y1="25.4006"
            x2="142.5"
            y2="25.4006"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.255" />
            <stop offset={sunrisePercentage / 100} stopColor="white" />
            <stop offset={sunsetPercentage / 100} stopColor="#888888" />
            <stop offset="0.77" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SunPathChart;
