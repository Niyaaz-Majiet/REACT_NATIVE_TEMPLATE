import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Eye from '../../../public/eye.svg';

type PasswordInputWithLabelProps = {
  label: string;
  placeholder: string;
};

function PasswordInputWithLabel(
  props: PasswordInputWithLabelProps,
): JSX.Element {
  const [show, setShow] = useState(true);
  const [isTextInputFocused, setTextInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>

      <TextInput
        secureTextEntry={show}
        style={isTextInputFocused ? styles.inputFocused : styles.input}
        placeholder={props.placeholder}
        onFocus={() => setTextInputFocused(true)}
        onBlur={() => setTextInputFocused(false)}
      />
      <Eye style={styles.icon} onPress={() => setShow(!show)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    alignSelf: 'center',
  },
  label: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 18,
  },
  input: {
    borderRadius: 10,
    height: 60,
    borderWidth: 1,
    borderColor: '#82DEF9',
  },
  inputFocused: {
    borderRadius: 10,
    height: 60,
    borderWidth: 1,
    borderColor: '#82DEF9',
    backgroundColor: '#3ED4F51A',
  },
  icon: {
    position: 'absolute',
    right: '5%',
    top: '50%',
  },
});

export default PasswordInputWithLabel;
