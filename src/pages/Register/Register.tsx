import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import PasswordInputWithLabel from '../../components/PasswordInputWithLabel/PasswordInputWithLabel';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import TextWithLink from '../../components/TextWithLink/TextWithLink';

function Register(props: any): JSX.Element {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <InputWithLabel label="Username" placeholder="Username" />

        <InputWithLabel label="Email Address" placeholder="Email" />

        <PasswordInputWithLabel label="Password" placeholder="Password" />

        <PasswordInputWithLabel
          label="Confirm Password"
          placeholder="Confirm Password"
        />

        <SubmitButton
          label="Register"
          isTransparent={false}
          onClick={() => {}}
        />

        <View style={styles.row}>
          <TextWithLink
            label="Already have an Account ?"
            linkText="Login"
            alignRight={false}
            onClick={() => props.navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowItem: {
    width: '50%',
  },
});

export default Register;
