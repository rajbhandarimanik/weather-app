import { useWeatherData } from '../api/api';

function processWeatherData(data) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay(); // Get the index of today's day

  const dailyData = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const dayIndex = date.getDay();
    const dayName = dayIndex === today ? 'today' : daysOfWeek[dayIndex];

    if (!acc[dayName]) {
      acc[dayName] = {
        day: dayName,
        date: date.toISOString().split('T')[0],
        temperatures: [],
        icons: [],
      };
    }

    acc[dayName].temperatures.push(item.main.temp);
    acc[dayName].icons.push(item.weather[0].icon); // Store the weather icons

    return acc;
  }, {});

  return Object.values(dailyData).map((day) => {
    const temperatures = day.temperatures;
    const high = Math.max(...temperatures);
    const low = Math.min(...temperatures);

    // Find the most frequent icon for the day
    const iconCounts = day.icons.reduce((count, icon) => {
      count[icon] = (count[icon] || 0) + 1;
      return count;
    }, {});
    const mostFrequentIcon = Object.keys(iconCounts).reduce((a, b) =>
      iconCounts[a] > iconCounts[b] ? a : b
    );

    return {
      day: day.day,
      date: day.date,
      temperature: {
        high: high.toFixed(0),
        low: low.toFixed(0),
      },
      icon: mostFrequentIcon, // Use the most frequent icon
    };
  });
}

const useDailyForecast = () => {
  const lat = -37.8136;
  const lon = 144.9631;

  const { data, isLoading, isError, error } = useWeatherData(lat, lon);

  if (isLoading) {
    return { data: null, isLoading: true };
  }

  if (isError) {
    console.error('Error fetching weather data:', error);
    return { data: null, isError: true };
  }

  if (data) {
    // console.log(data.data);
    let modifiedData = processWeatherData(data.data);
    // console.log(modifiedData);
    return { data: modifiedData };
  }

  return { data, ...rest };
};
export default useDailyForecast;
