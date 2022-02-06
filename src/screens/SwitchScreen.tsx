/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {CustomeSwitch} from '../components/CustomeSwitch';

interface IState {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

type keyState = keyof IState;

export const SwitchScreen: FC = () => {
  const [state, setState] = useState<IState>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHappy, isHungry} = state;

  const onChange = (value: boolean, field: keyState) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>IsActive</Text>
        <CustomeSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomeSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomeSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
