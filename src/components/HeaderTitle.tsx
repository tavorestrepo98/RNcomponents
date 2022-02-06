/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle: FC<Props> = ({title}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 10, marginBottom: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
