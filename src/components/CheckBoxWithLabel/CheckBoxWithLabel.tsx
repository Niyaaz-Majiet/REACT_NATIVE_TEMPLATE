import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, View, Text} from 'react-native';

type CheckBoxWithLabelProps = {
  label: string;
};

function CheckBoxWithLabel(props: CheckBoxWithLabelProps): JSX.Element {
  return (
    <View style={styles.container}>
      <CheckBox
        value={true}
        style={styles.input}
        tintColors={{true: '#3ED4F5', false: '#3ED4F5'}}
      />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'wrap',
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
  },
});

export default CheckBoxWithLabel;
