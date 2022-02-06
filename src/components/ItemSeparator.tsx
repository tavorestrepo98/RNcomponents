/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View} from 'react-native';

export const ItemSeparator: FC = () => {
  return (
    <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 5}} />
  );
};
