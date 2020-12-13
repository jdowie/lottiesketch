import React, {useRef} from 'react';
import {Animated, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Menu from './Menu';
import SimpleExample from './examples/SimpleExample';
import DifferentSpeedsExample from './examples/DifferentSpeedsExample';
import SlideUpExample from './examples/SlideUpExample';
import ButtonTriggerExample from './examples/ButtonTriggerExample';
import ExtraExample from './examples/ExtraExample';

export default LottieSketch = () => {
  const activeScreen = useSelector((state) => state.navigation.activeScreen);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const animationOneAV = useRef(new Animated.Value(0)).current;
  const animationOneAltAV = useRef(new Animated.Value(0)).current;
  const ANIMATION_ONE_WIDTH = 160;
  const ANIMATION_ONE_RATIO = 160 / 160;

  const animationTwoAV = useRef(new Animated.Value(0)).current;
  const ANIMATION_TWO_WIDTH = 160;
  const ANIMATION_TWO_RATIO = 300 / 160;

  const slideUpOpacityAV = useRef(new Animated.Value(0)).current;
  const translateYAV = useRef(new Animated.Value(0)).current;

  if (activeScreen === 'home') {
    return <Menu />;
  } else if (activeScreen === 'simple') {
    return (
      <SimpleExample
        width={ANIMATION_ONE_WIDTH}
        ratio={ANIMATION_ONE_RATIO}
        progressAV={animationOneAV}
      />
    );
  } else if (activeScreen === 'differentSpeeds') {
    return (
      <DifferentSpeedsExample
        width={ANIMATION_ONE_WIDTH}
        ratio={ANIMATION_ONE_RATIO}
        progressAV={animationOneAV}
        progressAltAV={animationOneAltAV}
      />
    );
  } else if (activeScreen === 'slideUp') {
    return (
      <SlideUpExample
        width={ANIMATION_ONE_WIDTH}
        ratio={ANIMATION_ONE_RATIO}
        progressAV={animationOneAV}
        progressAltAV={animationOneAltAV}
        opacityAV={slideUpOpacityAV}
        translateYAV={translateYAV}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
      />
    );
  } else if (activeScreen === 'buttonTrigger') {
    return (
      <ButtonTriggerExample
        width={ANIMATION_ONE_WIDTH}
        ratio={ANIMATION_ONE_RATIO}
        progressAV={animationOneAV}
      />
    );
  } else if (activeScreen === 'extra') {
    return (
      <ExtraExample
        width={ANIMATION_TWO_WIDTH}
        ratio={ANIMATION_TWO_RATIO}
        progressAV={animationTwoAV}
      />
    );
  } else {
    return null;
  }
};
