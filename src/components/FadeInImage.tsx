/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {ActivityIndicator, Animated, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  image: string;
}

export const FadeInImage: FC<Props> = ({image}) => {
  const {opacidad, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color="#5856D6"
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri: image}}
        onLoadEnd={() => {
          fadeIn();
          setIsLoading(false);
        }}
        style={{width: '100%', height: 400, opacity: opacidad}}
      />
    </View>
  );
};
