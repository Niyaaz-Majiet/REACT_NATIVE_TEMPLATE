import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import {onSignOut} from '../auth';

function Home(props: any): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home</Text>
        <SubmitButton
          isTransparent={false}
          label="SIGN OUT"
          onClick={() =>
            onSignOut()
              .then(() => props.route.params.logout())
              .catch((e: any) => {
                console.log(e);
              })
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default Home;
