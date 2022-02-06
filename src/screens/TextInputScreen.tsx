import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';

import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {IForm} from '../models/form.model';
import {styles} from '../theme/appTheme';

export const TextInputScreen: FC = () => {
  const {form, onChange} = useForm<IForm>({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {isSubscribed} = form;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Input" />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingresa el nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingresa el nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingresa el email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingresa el teléfono"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>IsActive</Text>
            <CustomeSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    marginVertical: 4,
  },
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
