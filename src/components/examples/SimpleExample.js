import React, {useState, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import BackArrow from '../BackArrow';
import {scaleWidth} from '../../helpers';

const SimpleExample = (props) => {
  const {width, ratio, progressAV} = props;
  const [loopToggle, setLoopToggle] = useState(null);

  const customWidth = scaleWidth(width, 1.5);
  const ANIMATION_PATH = '../../../assets/animation-one.json';
  const SimpleAnimation = Animated.timing(progressAV, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });

  useEffect(() => {
    progressAV.setValue(0);
    SimpleAnimation.start(() => setLoopToggle(!loopToggle));
    return () => SimpleAnimation.stop();
  }, [loopToggle]);

  return (
    <View style={{flex: 1}}>
      <BackArrow />
      <View style={styles.example}>
        <LottieView
          style={{
            width: customWidth,
            height: customWidth * ratio,
          }}
          progress={progressAV}
          source={require(ANIMATION_PATH)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  example: {
    flex: 9,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default SimpleExample;
