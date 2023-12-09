import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type SubmitButtonProps = {
  label: string;
  isTransparent: boolean;
  onClick: () => void;
};

function SubmitButton(props: SubmitButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={
        props.isTransparent
          ? styles.submitButtonTransparentBackground
          : styles.submitButtonBackground
      }
      onPress={() => props.onClick()}>
      <View>
        <Text
          style={props.isTransparent ? styles.labelTransparent : styles.label}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submitButtonBackground: {
    borderRadius: 100,
    height: 64,
    backgroundColor: '#FF55B2',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  submitButtonTransparentBackground: {
    borderRadius: 100,
    height: 64,
    backgroundColor: '#F8F6EF',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#FF55B2',
    borderWidth: 1,
  },
  label: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
  },
  labelTransparent: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FF55B2',
    padding: 10,
  },
});

export default SubmitButton;
