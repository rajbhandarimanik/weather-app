const unixToHour = (unixTime) => {
  //const date = new Date(unixTime * 1000); // Convert Unix time to milliseconds
  const date = new Date(unixTime); // Convert Unix time to milliseconds
  const hours = String(date.getUTCHours()).padStart(2, '0'); // Get hours in 24-hour format
  return hours;
};
export default unixToHour;
