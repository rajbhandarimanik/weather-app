export const formatUnixToTime = (unixTime) => {
  const date = new Date(unixTime * 1000); // Convert Unix timestamp to milliseconds
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // if hours is 0, set it to 12 (midnight or noon)

  return `${hours}${amPm}`;
};
