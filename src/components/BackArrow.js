import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {NAVIGATE_TO_SCREEN} from '../actions/types';
import {useDispatch} from 'react-redux';

const BackArrow = () => {
  const dispatch = useDispatch();

  const navToHome = () => dispatch({type: NAVIGATE_TO_SCREEN, payload: 'home'});

  return (
    <View style={{flex: 1}}>
      <Pressable onPress={navToHome} style={styles.back_arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  back_arrow: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftWidth: 15,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    borderLeftColor: 'transparent',
    transform: [{rotate: '270deg'}],
  },
});

export default BackArrow;
