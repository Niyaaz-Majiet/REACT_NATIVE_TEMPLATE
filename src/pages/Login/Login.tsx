import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
//import SplashScreen from 'react-native-splash-screen';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import PasswordInputWithLabel from '../../components/PasswordInputWithLabel/PasswordInputWithLabel';
import CheckBoxWithLabel from '../../components/CheckBoxWithLabel/CheckBoxWithLabel';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import TextWithLink from '../../components/TextWithLink/TextWithLink';
import {onSignIn} from '../auth';

function Login(props: any): JSX.Element {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <InputWithLabel
          label="Username or Email Address"
          placeholder="Username/Email"
        />

        <PasswordInputWithLabel label="Password" placeholder="Password" />

        <View style={styles.row}>
          <View style={styles.rowItem}>
            <CheckBoxWithLabel label=" Remember Me" />
          </View>

          <View style={styles.rowItem}>
            <TextWithLink
              label=" Forgot Password ?"
              linkText="Reset"
              alignRight={true}
              onClick={() => {}}
            />
          </View>
        </View>

        <SubmitButton
          label="LOGIN"
          isTransparent={false}
          onClick={() => onSignIn().then(() => props.route.params.login())}
        />

        <View style={styles.row}>
          <TextWithLink
            label="Don't have an account ?"
            linkText="Sign up"
            alignRight={false}
            onClick={() => props.navigation.navigate('Register')}
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

export default Login;
