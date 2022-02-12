const secondsToTimeFormat = (totalSeconds: number): string => {
  // Calculate the timestamp
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor(totalSeconds / 60) - hrs * 60;
  const secs = Math.floor(totalSeconds % 60);

  let outputString = '';
  if (hrs > 0) outputString += `${hrs}:`;
  if (mins < 10 && hrs > 0) outputString += `0${mins}:`;
  else outputString += `${mins}:`;
  if (secs < 10) outputString += `0${secs}`;
  else outputString += `${secs}`;

  return outputString;
};

export default secondsToTimeFormat;
