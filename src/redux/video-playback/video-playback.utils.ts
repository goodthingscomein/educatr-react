import clampNumber from '../../utils/clampNumber';

// Clamp the volume to appropriate values (5% increments)
export const clampVolume = (newVolume: number): number => clampNumber(newVolume, 0, 20);
