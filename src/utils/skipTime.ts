import clampNumber from './clampNumber';

const skipTime = (msToSkip: number, currentTimeMs: number, videoLengthMs: number): number => {
  const newTimeMs = currentTimeMs + msToSkip;
  return clampNumber(newTimeMs, 0, videoLengthMs);
};

export default skipTime;
