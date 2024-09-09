export const formatUnixToTime = (unixTime) => {
  const date = new Date(unixTime * 1000); // Convert Unix timestamp to milliseconds
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const minuteString = (minutes) => {
    if (minutes == 0) return '';
    else if (minutes < 9) return `:0${minutes}`;
    else return `:${minutes}`;
  };

  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // if hours is 0, set it to 12 (midnight or noon)

  return `${hours}${minuteString(minutes)}${amPm}`;
};
