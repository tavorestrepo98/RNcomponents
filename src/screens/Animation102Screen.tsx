/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {useAnimation} from '../hooks/useAnimation';

export const Animation102Screen = () => {
  const {pan, panResponder} = useAnimation();
  console.log(pan.getLayout());
  return (
    <View style={{flex: 1, ...styles.container}}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.lightBlueBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBlueBox: {
    backgroundColor: '#61dafb',
    width: 150,
    height: 150,
  },
});
