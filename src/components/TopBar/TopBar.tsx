import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function TopBar(props: any): JSX.Element {
  return (
    <View style={styles.view}>
      <Text>Top Bar React component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  infoIcon: {
    position: 'absolute',
    right: 15,
    top: 40,
  },
  icon: {
    height: 25,
    width: 25,
  },
});

export default TopBar;
