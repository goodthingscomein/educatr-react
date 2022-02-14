const clampNumber = (input: number, min: number, max: number): number => {
  if (input > max) return max;
  if (input < min) return min;
  return input;
};

export default clampNumber;
