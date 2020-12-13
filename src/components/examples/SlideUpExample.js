import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import BackArrow from '../BackArrow';
import {scaleWidth} from '../../helpers';

const SlideUpExample = (props) => {
  const {
    width,
    ratio,
    progressAV,
    opacityAV,
    translateYAV,
    windowWidth,
    windowHeight,
  } = props;
  const [loopToggle, setLoopToggle] = useState(null);

  const customWidth = scaleWidth(width, 1.5);
  const ANIMATION_PATH = '../../../assets/animation-one.json';

  const translateYAnimation = translateYAV.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const SimpleAnimation = Animated.timing(progressAV, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });

  const SlideUpAnimation = Animated.sequence([
    Animated.timing(translateYAV, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    SimpleAnimation,
    Animated.timing(opacityAV, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    progressAV.setValue(0);
    opacityAV.setValue(1);
    translateYAV.setValue(0);
    SlideUpAnimation.start(() => setLoopToggle(!loopToggle));
    return () => SlideUpAnimation.stop();
  }, [loopToggle]);

  return (
    <View style={{width: windowWidth, height: windowHeight}}>
      <BackArrow />
      <Animated.View
        style={[
          styles.slide_up_example,
          {
            opacity: opacityAV,
            transform: [{translateY: translateYAnimation}],
            top: 100,
            left: windowWidth / 2 - customWidth * 0.5,
            width: customWidth,
            height: customWidth * ratio,
          },
        ]}>
        <LottieView
          style={{
            width: customWidth,
            height: customWidth * ratio,
          }}
          progress={progressAV}
          source={require(ANIMATION_PATH)}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide_up_example: {
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default SlideUpExample;
