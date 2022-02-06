import React, {FC, useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomeSwitch: FC<Props> = ({isOn, onChange}) => {
  const [isEnable, setisEnable] = useState(isOn);
  const toggleSwitch = () => {
    setisEnable(!isEnable);
    onChange(!isEnable);
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isOn}
    />
  );
};
