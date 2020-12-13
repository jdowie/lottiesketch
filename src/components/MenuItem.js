import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export default MenuItem = (props) => {
  return (
    <View style={styles.menu_button_wrap}>
      <Pressable
        style={[styles.menu_button, {backgroundColor: props.buttonColor}]}
        onPress={props.onPress}>
        <Text style={styles.menu_button_text}>{props.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menu_button_wrap: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menu_button: {
    width: '66%',
    height: '40%',
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menu_button_text: {
    fontSize: 24,
    color: 'white',
  },
});
