import React from 'react';
import {View, Text, StyleSheet, Animated, Pressable} from 'react-native';
import LottieView from 'lottie-react-native';
import BackArrow from '../BackArrow';
import {scaleWidth} from '../../helpers';

const ButtonTriggerExample = (props) => {
  const {width, ratio, progressAV} = props;
  const customWidth = scaleWidth(width, 1.5);
  const ANIMATION_PATH = '../../../assets/animation-one.json';

  const SimpleAnimation = Animated.timing(progressAV, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });

  const runAnimation = () => {
    progressAV.setValue(0);
    SimpleAnimation.start();
  };

  return (
    <View style={{flex: 1}}>
      <BackArrow />
      <View style={styles.simple_example}>
        <LottieView
          style={{
            width: customWidth,
            height: customWidth * ratio,
          }}
          progress={progressAV}
          source={require(ANIMATION_PATH)}
        />
        <Pressable style={styles.button} onPress={runAnimation}>
          <Text style={styles.button_text}>Animate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  simple_example: {
    flex: 9,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#169956',
  },
  button_text: {
    fontSize: 40,
    color: 'white',
  },
});

export default ButtonTriggerExample;
