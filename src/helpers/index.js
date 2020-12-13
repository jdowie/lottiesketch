import {Animated} from 'react-native';

export const scaleWidth = (width, scale) => width * scale;

export const LoopAnimation = (AV, duration) => {
  AV.setValue(0);
  Animated.timing(AV, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  }).start(() => LoopAnimation(AV, duration));
};
