import {Dimensions, PixelRatio} from 'react-native';

export const ws = (size: number, max: number = size + 4) => {
  const width = Dimensions.get('window').width;
  const sizeBase = 0.0024154589371980675; // iPhone 11
  const value = Math.round(width * (sizeBase * size));

  if (value <= size) {
    return PixelRatio.roundToNearestPixel(value);
  }
  return PixelRatio.roundToNearestPixel(max);
};
