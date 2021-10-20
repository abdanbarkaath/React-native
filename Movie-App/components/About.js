import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function About({ navigation }) {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false
    });
    return () =>
      parent.setOptions({
        tabBarVisible: false
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeStack')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});