/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {IMenuItem} from '../models/menuItem.model';
import {RootStackParams} from '../navigation/Navigator';

type HomeScreenProps = StackNavigationProp<RootStackParams, any>;

interface Props {
  menuItem: IMenuItem;
}

export const FlatListMenuItem: FC<Props> = ({menuItem}) => {
  const navigation = useNavigation<HomeScreenProps>();

  const goToScreen = () => {
    navigation.navigate(menuItem.component as any);
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goToScreen}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={25} color="#5856D6" />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" size={25} color="#5856D6" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
