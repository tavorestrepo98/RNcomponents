import React from 'react';
import {Alert, Button, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'message',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            console.log('Botón cancelar');
          },
          style: 'destructive',
        },
        {
          text: 'Ok',
          onPress: () => {
            console.log('Botón Ok');
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title={'Mostrar Alerta'} onPress={showAlert} />
    </View>
  );
};
