import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

type InputWithLabelProps = {
  label: string;
  placeholder: string;
};

function InputWithLabel(props: InputWithLabelProps): JSX.Element {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>

      <TextInput
        style={isTextInputFocused ? styles.inputFocused : styles.input}
        placeholder={props.placeholder}
        onFocus={() => setTextInputFocused(true)}
        onBlur={() => setTextInputFocused(false)}
      />
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
});

export default InputWithLabel;
