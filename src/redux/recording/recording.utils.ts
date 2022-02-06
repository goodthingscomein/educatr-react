export const calculateRewindTime = (currentTimeMilliseconds: number, secondsToRewind: number): number => {
  const newTime = currentTimeMilliseconds - secondsToRewind * 1000;
  return newTime > 0 ? currentTimeMilliseconds : 0;
};

export const calculateFastforwardTime = (
  currentTimeMilliseconds: number,
  videoLengthSeconds: number,
  secondsToFastforward: number
): number => {
  const newTime = currentTimeMilliseconds + secondsToFastforward * 1000;
  return newTime < videoLengthSeconds * 1000 ? newTime : videoLengthSeconds * 1000;
};
