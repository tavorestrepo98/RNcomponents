/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen: FC = () => {
  const {opacidad, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={{flex: 1, ...styles.container}}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacidad,
          transform: [{translateY: position}],
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(100);
          }}
        />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '80%',
  },
});
