import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {NAVIGATE_TO_SCREEN} from '../actions/types';

import MenuItem from './MenuItem';

export default Menu = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={{fontSize: 30}}>Lottie Demo</Text>
      </View>
      <MenuItem
        name={'Simple'}
        buttonColor={'#CB2D3E'}
        onPress={() => dispatch({type: NAVIGATE_TO_SCREEN, payload: 'simple'})}
      />
      <MenuItem
        name={'Different Speeds'}
        buttonColor={'#D76B25'}
        onPress={() =>
          dispatch({type: NAVIGATE_TO_SCREEN, payload: 'differentSpeeds'})
        }
      />
      <MenuItem
        name={'Slide Up'}
        buttonColor={'#FFD200'}
        onPress={() => dispatch({type: NAVIGATE_TO_SCREEN, payload: 'slideUp'})}
      />
      <MenuItem
        name={'Button Trigger'}
        buttonColor={'#169956'}
        onPress={() =>
          dispatch({type: NAVIGATE_TO_SCREEN, payload: 'buttonTrigger'})
        }
      />
      <MenuItem
        name={'Extra'}
        buttonColor={'#1CB4E0'}
        onPress={() => dispatch({type: NAVIGATE_TO_SCREEN, payload: 'extra'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
