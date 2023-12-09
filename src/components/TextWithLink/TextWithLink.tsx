import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TextWithLinkProps = {
  label: string;
  linkText: string;
  alignRight: bool;
  onClick: () => void;
};

function TextWithLink(props: TextWithLinkProps): JSX.Element {
  return (
    <View
      style={props.alignRight ? styles.containerRight : styles.containerCenter}>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.linkText} onPress={() => props.onClick()}>
        {props.linkText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCenter: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  containerRight: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-end',
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
  linkText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
});

export default TextWithLink;
